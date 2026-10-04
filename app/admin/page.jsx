"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  BriefcaseBusiness,
  CalendarClock,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Clock3,
  ExternalLink,
  Flame,
  LogOut,
  Mail,
  Menu,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Trash2,
  UserRound,
  X,
  XCircle,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

const ADMIN_EMAIL = "vaelthortechnologies@gmail.com";

const STATUS_OPTIONS = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "in_progress", label: "In Progress" },
  { value: "closed", label: "Closed" },
];

const PRIORITY_OPTIONS = [
  { value: "hot", label: "Hot" },
  { value: "warm", label: "Warm" },
  { value: "cold", label: "Cold" },
];

function formatDate(date) {
  if (!date) return "—";

  try {
    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(date));
  } catch {
    return "—";
  }
}

function formatShortDate(date) {
  if (!date) return "—";

  try {
    return new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(date));
  } catch {
    return "—";
  }
}

function formatCurrency(amount) {
  if (amount === null || amount === undefined || amount === "") {
    return "—";
  }

  const numeric = Number(amount);

  if (Number.isNaN(numeric)) return "—";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(numeric);
}

function formatDateTimeLocal(value) {
  if (!value) return "";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  const pad = (number) => String(number).padStart(2, "0");

  return `${date.getFullYear()}-${pad(
    date.getMonth() + 1
  )}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(
    date.getMinutes()
  )}`;
}

function getPriority(value) {
  const priority = String(value || "warm").toLowerCase();

  if (priority === "hot") return "hot";
  if (priority === "cold") return "cold";

  return "warm";
}

function getStatus(value) {
  const status = String(value || "new").toLowerCase();

  if (status === "in-progress" || status === "in progress") {
    return "in_progress";
  }

  if (
    ["new", "contacted", "in_progress", "closed"].includes(status)
  ) {
    return status;
  }

  return "new";
}

function StatusBadge({ status }) {
  const normalized = getStatus(status);

  const config = {
    new: {
      label: "New",
      className:
        "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
      icon: CircleDot,
    },
    contacted: {
      label: "Contacted",
      className:
        "border-blue-400/20 bg-blue-400/10 text-blue-300",
      icon: Phone,
    },
    in_progress: {
      label: "In Progress",
      className:
        "border-violet-400/20 bg-violet-400/10 text-violet-300",
      icon: Clock3,
    },
    closed: {
      label: "Closed",
      className:
        "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
      icon: CheckCircle2,
    },
  };

  const item = config[normalized];
  const Icon = item.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${item.className}`}
    >
      <Icon size={13} />
      {item.label}
    </span>
  );
}

function PriorityBadge({ priority }) {
  const normalized = getPriority(priority);

  const config = {
    hot: {
      label: "Hot",
      className:
        "border-red-400/20 bg-red-400/10 text-red-300",
      icon: Flame,
    },
    warm: {
      label: "Warm",
      className:
        "border-amber-400/20 bg-amber-400/10 text-amber-300",
      icon: Flame,
    },
    cold: {
      label: "Cold",
      className:
        "border-sky-400/20 bg-sky-400/10 text-sky-300",
      icon: CircleDot,
    },
  };

  const item = config[normalized];
  const Icon = item.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${item.className}`}
    >
      <Icon size={13} />
      {item.label}
    </span>
  );
}

function StatCard({
  title,
  value,
  icon: Icon,
  description,
  accent = "cyan",
}) {
  const accents = {
    cyan:
      "border-cyan-400/15 bg-cyan-400/[0.04] text-cyan-300",
    red:
      "border-red-400/15 bg-red-400/[0.04] text-red-300",
    amber:
      "border-amber-400/15 bg-amber-400/[0.04] text-amber-300",
    violet:
      "border-violet-400/15 bg-violet-400/[0.04] text-violet-300",
    emerald:
      "border-emerald-400/15 bg-emerald-400/[0.04] text-emerald-300",
  };

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl border p-5 backdrop-blur-xl ${accents[accent]}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-white/50">{title}</p>

          <p className="mt-2 text-3xl font-bold text-white">
            {value}
          </p>

          {description && (
            <p className="mt-1 text-xs text-white/40">
              {description}
            </p>
          )}
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
          <Icon size={19} />
        </div>
      </div>
    </motion.div>
  );
}

function NotificationItem({ notification }) {
  return (
    <div className="border-b border-white/5 px-4 py-3 last:border-b-0">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-lg bg-cyan-400/10 p-2 text-cyan-300">
          <Bell size={15} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-white">
            {notification.title}
          </p>

          <p className="mt-1 truncate text-xs text-white/50">
            {notification.description}
          </p>

          <p className="mt-1 text-[11px] text-white/30">
            {notification.time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [session, setSession] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const [notifications, setNotifications] = useState([]);

  const [updatingId, setUpdatingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [savingCrm, setSavingCrm] = useState(false);

  const [realtimeStatus, setRealtimeStatus] = useState(
    "CONNECTING"
  );

  const [crmForm, setCrmForm] = useState({
    status: "new",
    priority: "warm",
    notes: "",
    follow_up_date: "",
    assigned_to: "",
    quoted_amount: "",
    contacted_at: "",
    closed_at: "",
  });

  const loadSession = useCallback(async () => {
    setCheckingAuth(true);

    const {
      data: { session: currentSession },
    } = await supabase.auth.getSession();

    if (!currentSession) {
      window.location.replace("/admin/login");
      return;
    }

    setSession(currentSession);
    setCheckingAuth(false);
  }, []);

  useEffect(() => {
    loadSession();
  }, [loadSession]);

  const fetchEnquiries = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("project_enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Fetch enquiries error:", error);
        return;
      }

      setEnquiries(data || []);
    } catch (error) {
      console.error("Unexpected fetch error:", error);
    }
  }, []);

  useEffect(() => {
    if (!session) return;

    let channel;

    const setup = async () => {
      setLoading(true);

      await fetchEnquiries();

      setLoading(false);

      channel = supabase
        .channel("project-enquiries-realtime")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "project_enquiries",
          },
          (payload) => {
            const newEnquiry = payload.new;

            setEnquiries((current) => {
              const exists = current.some(
                (item) => item.id === newEnquiry.id
              );

              if (exists) return current;

              return [newEnquiry, ...current];
            });

            setNotifications((current) => [
              {
                id: `${newEnquiry.id}-${Date.now()}`,
                title: "New Project Enquiry",
                description:
                  `${newEnquiry.name || "New client"} submitted an enquiry`,
                time: "Just now",
              },
              ...current,
            ]);

            setShowNotifications(true);
          }
        )
        .on(
          "postgres_changes",
          {
            event: "UPDATE",
            schema: "public",
            table: "project_enquiries",
          },
          (payload) => {
            const updated = payload.new;

            setEnquiries((current) =>
              current.map((item) =>
                item.id === updated.id ? updated : item
              )
            );

            setSelectedEnquiry((current) =>
              current?.id === updated.id ? updated : current
            );
          }
        )
        .on(
          "postgres_changes",
          {
            event: "postgres_changes",
            schema: "public",
            table: "project_enquiries",
          },
          () => {}
        )
        .on(
          "postgres_changes",
          {
            event: "DELETE",
            schema: "public",
            table: "project_enquiries",
          },
          (payload) => {
            const deletedId = payload.old?.id;

            setEnquiries((current) =>
              current.filter((item) => item.id !== deletedId)
            );

            setSelectedEnquiry((current) =>
              current?.id === deletedId ? null : current
            );
          }
        )
        .subscribe((status) => {
          setRealtimeStatus(status);
        });
    };

    setup();

    return () => {
      if (channel) {
        supabase.removeChannel(channel);
      }
    };
  }, [session, fetchEnquiries]);

  useEffect(() => {
    if (!selectedEnquiry) return;

    setCrmForm({
      status: getStatus(selectedEnquiry.status),
      priority: getPriority(selectedEnquiry.priority),
      notes: selectedEnquiry.notes || "",
      follow_up_date: formatDateTimeLocal(
        selectedEnquiry.follow_up_date
      ),
      assigned_to: selectedEnquiry.assigned_to || "",
      quoted_amount:
        selectedEnquiry.quoted_amount === null ||
        selectedEnquiry.quoted_amount === undefined
          ? ""
          : String(selectedEnquiry.quoted_amount),
      contacted_at: formatDateTimeLocal(
        selectedEnquiry.contacted_at
      ),
      closed_at: formatDateTimeLocal(
        selectedEnquiry.closed_at
      ),
    });
  }, [selectedEnquiry]);

  const stats = useMemo(() => {
    const total = enquiries.length;

    const newLeads = enquiries.filter(
      (item) => getStatus(item.status) === "new"
    ).length;

    const hotLeads = enquiries.filter(
      (item) => getPriority(item.priority) === "hot"
    ).length;

    const followUps = enquiries.filter((item) => {
      return (
        item.follow_up_date &&
        getStatus(item.status) !== "closed"
      );
    }).length;

    const inProgress = enquiries.filter(
      (item) => getStatus(item.status) === "in_progress"
    ).length;

    const closed = enquiries.filter(
      (item) => getStatus(item.status) === "closed"
    ).length;

    return {
      total,
      newLeads,
      hotLeads,
      followUps,
      inProgress,
      closed,
    };
  }, [enquiries]);

  const filteredEnquiries = useMemo(() => {
    const query = search.trim().toLowerCase();

    return enquiries.filter((item) => {
      const matchesSearch =
        !query ||
        [
          item.name,
          item.company,
          item.email,
          item.phone,
          item.service,
          item.budget,
          item.message,
          item.assigned_to,
          item.notes,
        ]
          .filter(Boolean)
          .some((value) =>
            String(value).toLowerCase().includes(query)
          );

      const matchesStatus =
        statusFilter === "all" ||
        getStatus(item.status) === statusFilter;

      const matchesPriority =
        priorityFilter === "all" ||
        getPriority(item.priority) === priorityFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [
    enquiries,
    search,
    statusFilter,
    priorityFilter,
  ]);

  function openEnquiry(enquiry) {
    setSelectedEnquiry(enquiry);
  }

  async function refreshData() {
    setRefreshing(true);

    await fetchEnquiries();

    setRefreshing(false);
  }

  async function saveCrmDetails() {
    if (!selectedEnquiry) return;

    try {
      setSavingCrm(true);

      const currentStatus = getStatus(selectedEnquiry.status);
      const nextStatus = getStatus(crmForm.status);

      let contactedAt = selectedEnquiry.contacted_at || null;
      let closedAt = selectedEnquiry.closed_at || null;

      if (nextStatus === "contacted" && !contactedAt) {
        contactedAt = new Date().toISOString();
      }

      if (
        nextStatus === "closed" &&
        !closedAt
      ) {
        closedAt = new Date().toISOString();
      }

      if (
        currentStatus === "contacted" &&
        !contactedAt
      ) {
        contactedAt = new Date().toISOString();
      }

      const followUpDate = crmForm.follow_up_date
        ? new Date(
            crmForm.follow_up_date
          ).toISOString()
        : null;

      const quotedAmount =
        crmForm.quoted_amount === ""
          ? null
          : Number(crmForm.quoted_amount);

      if (
        quotedAmount !== null &&
        Number.isNaN(quotedAmount)
      ) {
        alert("Please enter a valid quoted amount.");
        return;
      }

      const updates = {
        status: nextStatus,
        priority: getPriority(crmForm.priority),
        notes: crmForm.notes.trim(),
        follow_up_date: followUpDate,
        assigned_to: crmForm.assigned_to.trim(),
        quoted_amount: quotedAmount,
        contacted_at: contactedAt,
        closed_at: closedAt,
      };

      const { data, error } = await supabase
        .from("project_enquiries")
        .update(updates)
        .eq("id", selectedEnquiry.id)
        .select()
        .single();

      if (error) {
        console.error("CRM update error:", error);
        alert(
          error.message ||
            "Unable to save lead information."
        );
        return;
      }

      setEnquiries((current) =>
        current.map((item) =>
          item.id === selectedEnquiry.id
            ? data
            : item
        )
      );

      setSelectedEnquiry(data);

      alert("Lead details saved successfully.");
    } catch (error) {
      console.error("Unexpected CRM save error:", error);
      alert("Something went wrong while saving.");
    } finally {
      setSavingCrm(false);
    }
  }

  async function quickStatusUpdate(id, newStatus) {
    try {
      setUpdatingId(id);

      const enquiry = enquiries.find(
        (item) => item.id === id
      );

      if (!enquiry) return;

      const updates = {
        status: newStatus,
      };

      if (
        newStatus === "contacted" &&
        !enquiry.contacted_at
      ) {
        updates.contacted_at =
          new Date().toISOString();
      }

      if (
        newStatus === "closed" &&
        !enquiry.closed_at
      ) {
        updates.closed_at =
          new Date().toISOString();
      }

      const { data, error } = await supabase
        .from("project_enquiries")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

      if (error) {
        console.error("Status update error:", error);
        alert(error.message || "Unable to update status.");
        return;
      }

      setEnquiries((current) =>
        current.map((item) =>
          item.id === id ? data : item
        )
      );

      if (selectedEnquiry?.id === id) {
        setSelectedEnquiry(data);
      }
    } catch (error) {
      console.error("Unexpected status error:", error);
      alert("Something went wrong.");
    } finally {
      setUpdatingId(null);
    }
  }

  async function deleteEnquiry(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);

      const { error } = await supabase
        .from("project_enquiries")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Delete error:", error);
        alert(error.message || "Unable to delete enquiry.");
        return;
      }

      setEnquiries((current) =>
        current.filter((item) => item.id !== id)
      );

      if (selectedEnquiry?.id === id) {
        setSelectedEnquiry(null);
      }
    } catch (error) {
      console.error("Unexpected delete error:", error);
      alert("Something went wrong while deleting.");
    } finally {
      setDeletingId(null);
    }
  }

  async function logout() {
    await supabase.auth.signOut();
    window.location.replace("/admin/login");
  }

  if (checkingAuth) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#05070d] text-white">
        <div className="flex items-center gap-3 text-white/60">
          <RefreshCw
            size={18}
            className="animate-spin"
          />
          Checking admin session...
        </div>
      </main>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05070d] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[-12%] top-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.08] blur-[120px]" />
        <div className="absolute right-[-10%] top-[15%] h-[420px] w-[420px] rounded-full bg-violet-500/[0.07] blur-[130px]" />
        <div className="absolute bottom-[-15%] left-[35%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.05] blur-[120px]" />
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            aria-label="Close sidebar"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[270px] border-r border-white/10 bg-[#070a12]/95 backdrop-blur-2xl transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
            <div>
              <p className="text-lg font-bold tracking-tight">
                VAELTHOR
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/60">
                Technologies
              </p>
            </div>

            <button
              onClick={() => setSidebarOpen(false)}
              className="rounded-lg p-2 text-white/50 hover:bg-white/5 hover:text-white lg:hidden"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-4 py-6">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Workspace
            </p>

            <button className="flex w-full items-center gap-3 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.07] px-4 py-3 text-sm font-medium text-cyan-300">
              <BarChart3 size={18} />
              Lead Dashboard
            </button>

            <div className="mt-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/40">
              <BriefcaseBusiness size={18} />
              Project Enquiries
            </div>
          </div>

          {/* Admin */}
          <div className="border-t border-white/10 p-4">
            <div className="mb-3 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                <UserRound size={17} />
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-white">
                  Admin
                </p>
                <p className="truncate text-[10px] text-white/35">
                  {session.user?.email}
                </p>
              </div>
            </div>

            <button
              onClick={logout}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/45 transition hover:bg-red-400/10 hover:text-red-300"
            >
              <LogOut size={17} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <section className="relative z-10 min-h-screen lg:pl-[270px]">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05070d]/80 backdrop-blur-2xl">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-white/60 hover:text-white lg:hidden"
              >
                <Menu size={19} />
              </button>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-semibold sm:text-xl">
                    Lead Dashboard
                  </h1>

                  <span className="hidden rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-medium text-cyan-300 sm:inline-flex">
                    CRM
                  </span>
                </div>

                <div className="mt-1 flex items-center gap-2 text-xs text-white/35">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      realtimeStatus === "SUBSCRIBED"
                        ? "bg-emerald-400"
                        : "bg-amber-400"
                    }`}
                  />

                  {realtimeStatus === "SUBSCRIBED"
                    ? "Live updates connected"
                    : "Connecting live updates..."}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() =>
                    setShowNotifications((value) => !value)
                  }
                  className="relative rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-white/60 transition hover:bg-white/[0.06] hover:text-white"
                >
                  <Bell size={18} />

                  {notifications.length > 0 && (
                    <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.7)]" />
                  )}
                </button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -8,
                        scale: 0.98,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                        scale: 0.98,
                      }}
                      className="absolute right-0 mt-3 w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#090d16]/95 shadow-2xl backdrop-blur-2xl"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                        <div>
                          <p className="text-sm font-semibold">
                            Notifications
                          </p>
                          <p className="text-[11px] text-white/35">
                            Live lead activity
                          </p>
                        </div>

                        {notifications.length > 0 && (
                          <button
                            onClick={() =>
                              setNotifications([])
                            }
                            className="text-[11px] text-white/35 hover:text-white"
                          >
                            Clear
                          </button>
                        )}
                      </div>

                      {notifications.length === 0 ? (
                        <div className="px-4 py-8 text-center text-xs text-white/35">
                          No new notifications.
                        </div>
                      ) : (
                        <div className="max-h-[350px] overflow-y-auto">
                          {notifications
                            .slice(0, 10)
                            .map((notification) => (
                              <NotificationItem
                                key={notification.id}
                                notification={notification}
                              />
                            ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={refreshData}
                disabled={refreshing}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-white/60 transition hover:bg-white/[0.06] hover:text-white disabled:opacity-50"
              >
                <RefreshCw
                  size={18}
                  className={
                    refreshing
                      ? "animate-spin"
                      : ""
                  }
                />
              </button>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* Intro */}
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs text-cyan-300/70">
                <Sparkles size={14} />
                CRM Workspace
              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Manage your leads.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">
                Track enquiries, priorities, follow-ups, quotes,
                assignments and conversions from one place.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/35">
              <ShieldCheck
                size={15}
                className="text-emerald-300"
              />
              Admin protected
            </div>
          </div>

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
            <StatCard
              title="Total Leads"
              value={stats.total}
              icon={BriefcaseBusiness}
              description="All enquiries"
              accent="cyan"
            />

            <StatCard
              title="New Leads"
              value={stats.newLeads}
              icon={CircleDot}
              description="Need attention"
              accent="cyan"
            />

            <StatCard
              title="Hot Leads"
              value={stats.hotLeads}
              icon={Flame}
              description="High priority"
              accent="red"
            />

            <StatCard
              title="Follow-ups"
              value={stats.followUps}
              icon={CalendarClock}
              description="Active follow-ups"
              accent="amber"
            />

            <StatCard
              title="In Progress"
              value={stats.inProgress}
              icon={Clock3}
              description="Currently working"
              accent="violet"
            />

            <StatCard
              title="Closed"
              value={stats.closed}
              icon={CheckCircle2}
              description="Completed leads"
              accent="emerald"
            />
          </div>

          {/* Toolbar */}
          <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.025] p-4 backdrop-blur-xl">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
              <div className="relative flex-1">
                <Search
                  size={17}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30"
                />

                <input
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search name, company, email, phone, service..."
                  className="h-11 w-full rounded-xl border border-white/10 bg-black/20 pl-10 pr-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-cyan-400/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:flex">
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(event) =>
                      setStatusFilter(event.target.value)
                    }
                    className="h-11 min-w-[150px] appearance-none rounded-xl border border-white/10 bg-[#090d16] px-4 pr-9 text-sm text-white outline-none focus:border-cyan-400/30"
                  >
                    <option value="all">
                      All Status
                    </option>

                    {STATUS_OPTIONS.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={15}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/35"
                  />
                </div>

                <div className="relative">
                  <select
                    value={priorityFilter}
                    onChange={(event) =>
                      setPriorityFilter(event.target.value)
                    }
                    className="h-11 min-w-[150px] appearance-none rounded-xl border border-white/10 bg-[#090d16] px-4 pr-9 text-sm text-white outline-none focus:border-cyan-400/30"
                  >
                    <option value="all">
                      All Priority
                    </option>

                    {PRIORITY_OPTIONS.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={15}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/35"
                  />
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-white/30">
              <span>
                Showing {filteredEnquiries.length} of{" "}
                {enquiries.length} leads
              </span>

              {(search ||
                statusFilter !== "all" ||
                priorityFilter !== "all") && (
                <button
                  onClick={() => {
                    setSearch("");
                    setStatusFilter("all");
                    setPriorityFilter("all");
                  }}
                  className="text-cyan-300 hover:text-cyan-200"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Leads */}
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
            {/* Desktop Table */}
            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full min-w-[1100px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02] text-left">
                    <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-white/35">
                      Lead
                    </th>

                    <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-white/35">
                      Service
                    </th>

                    <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-white/35">
                      Priority
                    </th>

                    <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-white/35">
                      Status
                    </th>

                    <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-white/35">
                      Follow-up
                    </th>

                    <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-white/35">
                      Quote
                    </th>

                    <th className="px-5 py-4 text-right text-[11px] font-semibold uppercase tracking-wider text-white/35">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-5 py-16 text-center"
                      >
                        <div className="inline-flex items-center gap-3 text-sm text-white/40">
                          <RefreshCw
                            size={17}
                            className="animate-spin"
                          />
                          Loading leads...
                        </div>
                      </td>
                    </tr>
                  ) : filteredEnquiries.length === 0 ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-5 py-16 text-center"
                      >
                        <div className="mx-auto flex max-w-sm flex-col items-center">
                          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/30">
                            <BriefcaseBusiness size={24} />
                          </div>

                          <p className="mt-4 text-sm font-medium text-white/60">
                            No leads found
                          </p>

                          <p className="mt-1 text-xs text-white/30">
                            New project enquiries will appear here.
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredEnquiries.map((enquiry) => (
                      <tr
                        key={enquiry.id}
                        className="border-b border-white/5 transition hover:bg-white/[0.025]"
                      >
                        <td className="px-5 py-4">
                          <button
                            onClick={() =>
                              openEnquiry(enquiry)
                            }
                            className="text-left"
                          >
                            <p className="font-medium text-white hover:text-cyan-300">
                              {enquiry.name || "Unnamed"}
                            </p>

                            {enquiry.company && (
                              <p className="mt-1 text-xs text-white/35">
                                {enquiry.company}
                              </p>
                            )}

                            <p className="mt-1 text-xs text-white/30">
                              {enquiry.email}
                            </p>
                          </button>
                        </td>

                        <td className="px-5 py-4">
                          <p className="text-sm text-white/70">
                            {enquiry.service || "—"}
                          </p>

                          <p className="mt-1 text-xs text-white/30">
                            {enquiry.budget || "Budget not specified"}
                          </p>
                        </td>

                        <td className="px-5 py-4">
                          <PriorityBadge
                            priority={enquiry.priority}
                          />
                        </td>

                        <td className="px-5 py-4">
                          <StatusBadge
                            status={enquiry.status}
                          />
                        </td>

                        <td className="px-5 py-4">
                          {enquiry.follow_up_date ? (
                            <div>
                              <p className="text-sm text-white/70">
                                {formatShortDate(
                                  enquiry.follow_up_date
                                )}
                              </p>

                              <p className="mt-1 text-xs text-white/30">
                                {formatDate(
                                  enquiry.follow_up_date
                                )
                                  .split(", ")
                                  .slice(-1)[0]}
                              </p>
                            </div>
                          ) : (
                            <span className="text-xs text-white/25">
                              Not scheduled
                            </span>
                          )}
                        </td>

                        <td className="px-5 py-4">
                          <span className="text-sm font-medium text-white/70">
                            {formatCurrency(
                              enquiry.quoted_amount
                            )}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() =>
                                openEnquiry(enquiry)
                              }
                              className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/60 transition hover:bg-white/[0.07] hover:text-white"
                            >
                              Manage
                            </button>

                            <button
                              onClick={() =>
                                deleteEnquiry(enquiry.id)
                              }
                              disabled={
                                deletingId === enquiry.id
                              }
                              className="rounded-lg border border-red-400/10 bg-red-400/[0.04] p-2 text-red-300/60 transition hover:bg-red-400/10 hover:text-red-300 disabled:opacity-50"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile / Tablet Cards */}
            <div className="divide-y divide-white/5 lg:hidden">
              {loading ? (
                <div className="flex items-center justify-center px-5 py-16 text-sm text-white/40">
                  <RefreshCw
                    size={17}
                    className="mr-3 animate-spin"
                  />
                  Loading leads...
                </div>
              ) : filteredEnquiries.length === 0 ? (
                <div className="px-5 py-16 text-center text-sm text-white/35">
                  No leads found.
                </div>
              ) : (
                filteredEnquiries.map((enquiry) => (
                  <div
                    key={enquiry.id}
                    className="p-4 sm:p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <button
                          onClick={() =>
                            openEnquiry(enquiry)
                          }
                          className="text-left"
                        >
                          <p className="font-semibold text-white">
                            {enquiry.name || "Unnamed"}
                          </p>

                          {enquiry.company && (
                            <p className="mt-1 text-xs text-white/35">
                              {enquiry.company}
                            </p>
                          )}

                          <p className="mt-1 truncate text-xs text-white/30">
                            {enquiry.email}
                          </p>
                        </button>
                      </div>

                      <PriorityBadge
                        priority={enquiry.priority}
                      />
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                        <p className="text-[10px] uppercase tracking-wider text-white/25">
                          Service
                        </p>

                        <p className="mt-1 text-sm text-white/70">
                          {enquiry.service || "—"}
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                        <p className="text-[10px] uppercase tracking-wider text-white/25">
                          Quote
                        </p>

                        <p className="mt-1 text-sm text-white/70">
                          {formatCurrency(
                            enquiry.quoted_amount
                          )}
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                        <p className="text-[10px] uppercase tracking-wider text-white/25">
                          Status
                        </p>

                        <div className="mt-1">
                          <StatusBadge
                            status={enquiry.status}
                          />
                        </div>
                      </div>

                      <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                        <p className="text-[10px] uppercase tracking-wider text-white/25">
                          Follow-up
                        </p>

                        <p className="mt-1 text-sm text-white/70">
                          {enquiry.follow_up_date
                            ? formatShortDate(
                                enquiry.follow_up_date
                              )
                            : "Not set"}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() =>
                          openEnquiry(enquiry)
                        }
                        className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/70 transition hover:bg-white/[0.07] hover:text-white"
                      >
                        Manage Lead
                      </button>

                      <button
                        onClick={() =>
                          deleteEnquiry(enquiry.id)
                        }
                        disabled={
                          deletingId === enquiry.id
                        }
                        className="rounded-xl border border-red-400/10 bg-red-400/[0.04] px-3 text-red-300/70 transition hover:bg-red-400/10 hover:text-red-300 disabled:opacity-50"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Management Modal */}
      <AnimatePresence>
        {selectedEnquiry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-md sm:p-6"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedEnquiry(null);
              }
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              transition={{ duration: 0.2 }}
              className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#090d16] shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="truncate text-lg font-semibold text-white">
                      {selectedEnquiry.name ||
                        "Unnamed Lead"}
                    </h3>

                    <PriorityBadge
                      priority={selectedEnquiry.priority}
                    />

                    <StatusBadge
                      status={selectedEnquiry.status}
                    />
                  </div>

                  <p className="mt-1 text-xs text-white/35">
                    Created {formatDate(selectedEnquiry.created_at)}
                  </p>
                </div>

                <button
                  onClick={() =>
                    setSelectedEnquiry(null)
                  }
                  className="rounded-xl border border-white/10 p-2 text-white/50 hover:bg-white/5 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto">
                <div className="grid gap-0 lg:grid-cols-[1fr_1.2fr]">
                  {/* Lead Information */}
                  <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r sm:p-6">
                    <div className="mb-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/60">
                        Lead Information
                      </p>

                      <h4 className="mt-2 text-xl font-semibold">
                        {selectedEnquiry.name ||
                          "Unnamed Lead"}
                      </h4>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                        <p className="text-[10px] uppercase tracking-wider text-white/25">
                          Company
                        </p>

                        <p className="mt-1 text-sm text-white/70">
                          {selectedEnquiry.company ||
                            "Not provided"}
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                        <p className="text-[10px] uppercase tracking-wider text-white/25">
                          Email
                        </p>

                        <a
                          href={`mailto:${selectedEnquiry.email}`}
                          className="mt-1 flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200"
                        >
                          <Mail size={14} />
                          {selectedEnquiry.email ||
                            "Not provided"}
                        </a>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                        <p className="text-[10px] uppercase tracking-wider text-white/25">
                          Phone
                        </p>

                        <a
                          href={`tel:${selectedEnquiry.phone}`}
                          className="mt-1 flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200"
                        >
                          <Phone size={14} />
                          {selectedEnquiry.phone ||
                            "Not provided"}
                        </a>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                          <p className="text-[10px] uppercase tracking-wider text-white/25">
                            Service
                          </p>

                          <p className="mt-1 text-sm text-white/70">
                            {selectedEnquiry.service ||
                              "—"}
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                          <p className="text-[10px] uppercase tracking-wider text-white/25">
                            Budget
                          </p>

                          <p className="mt-1 text-sm text-white/70">
                            {selectedEnquiry.budget ||
                              "—"}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                        <p className="text-[10px] uppercase tracking-wider text-white/25">
                          Client Message
                        </p>

                        <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-white/60">
                          {selectedEnquiry.message ||
                            "No message provided."}
                        </p>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      <a
                        href={`mailto:${selectedEnquiry.email}`}
                        className="flex items-center justify-center gap-2 rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-2.5 text-xs font-medium text-cyan-300 transition hover:bg-cyan-400/10"
                      >
                        <Mail size={15} />
                        Email
                      </a>

                      <a
                        href={`tel:${selectedEnquiry.phone}`}
                        className="flex items-center justify-center gap-2 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.05] px-3 py-2.5 text-xs font-medium text-emerald-300 transition hover:bg-emerald-400/10"
                      >
                        <Phone size={15} />
                        Call
                      </a>
                    </div>
                  </div>

                  {/* CRM Controls */}
                  <div className="p-5 sm:p-6">
                    <div className="mb-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300/60">
                        CRM Management
                      </p>

                      <h4 className="mt-2 text-xl font-semibold">
                        Lead Details
                      </h4>

                      <p className="mt-1 text-sm text-white/35">
                        Update priority, follow-up, assignment,
                        quote and internal notes.
                      </p>
                    </div>

                    <div className="space-y-5">
                      {/* Status + Priority */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-xs font-medium text-white/45">
                            Lead Status
                          </label>

                          <select
                            value={crmForm.status}
                            onChange={(event) =>
                              setCrmForm((current) => ({
                                ...current,
                                status:
                                  event.target.value,
                              }))
                            }
                            className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white outline-none focus:border-cyan-400/30"
                          >
                            {STATUS_OPTIONS.map(
                              (option) => (
                                <option
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </option>
                              )
                            )}
                          </select>
                        </div>

                        <div>
                          <label className="mb-2 block text-xs font-medium text-white/45">
                            Priority
                          </label>

                          <select
                            value={crmForm.priority}
                            onChange={(event) =>
                              setCrmForm((current) => ({
                                ...current,
                                priority:
                                  event.target.value,
                              }))
                            }
                            className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white outline-none focus:border-cyan-400/30"
                          >
                            {PRIORITY_OPTIONS.map(
                              (option) => (
                                <option
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>

                      {/* Assignment + Quote */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-xs font-medium text-white/45">
                            Assigned To
                          </label>

                          <div className="relative">
                            <UserRound
                              size={15}
                              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/25"
                            />

                            <input
                              value={crmForm.assigned_to}
                              onChange={(event) =>
                                setCrmForm((current) => ({
                                  ...current,
                                  assigned_to:
                                    event.target.value,
                                }))
                              }
                              placeholder="e.g. Salman"
                              className="h-11 w-full rounded-xl border border-white/10 bg-black/20 pl-9 pr-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-cyan-400/30"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="mb-2 block text-xs font-medium text-white/45">
                            Quoted Amount
                          </label>

                          <input
                            type="number"
                            min="0"
                            value={crmForm.quoted_amount}
                            onChange={(event) =>
                              setCrmForm((current) => ({
                                ...current,
                                quoted_amount:
                                  event.target.value,
                              }))
                            }
                            placeholder="₹ 25,000"
                            className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-cyan-400/30"
                          />
                        </div>
                      </div>

                      {/* Follow-up */}
                      <div>
                        <label className="mb-2 block text-xs font-medium text-white/45">
                          Follow-up Date & Time
                        </label>

                        <div className="relative">
                          <CalendarClock
                            size={15}
                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/25"
                          />

                          <input
                            type="datetime-local"
                            value={crmForm.follow_up_date}
                            onChange={(event) =>
                              setCrmForm((current) => ({
                                ...current,
                                follow_up_date:
                                  event.target.value,
                              }))
                            }
                            className="h-11 w-full rounded-xl border border-white/10 bg-black/20 pl-9 pr-3 text-sm text-white outline-none focus:border-cyan-400/30"
                          />
                        </div>
                      </div>

                      {/* Notes */}
                      <div>
                        <label className="mb-2 block text-xs font-medium text-white/45">
                          Internal Notes
                        </label>

                        <textarea
                          value={crmForm.notes}
                          onChange={(event) =>
                            setCrmForm((current) => ({
                              ...current,
                              notes: event.target.value,
                            }))
                          }
                          rows={5}
                          placeholder="Add private notes about this lead..."
                          className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm leading-6 text-white outline-none placeholder:text-white/20 focus:border-cyan-400/30"
                        />
                      </div>

                      {/* Tracking */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                          <div className="flex items-center gap-2">
                            <Phone
                              size={15}
                              className="text-blue-300"
                            />

                            <p className="text-xs font-medium text-white/60">
                              Contacted
                            </p>
                          </div>

                          <p className="mt-2 text-xs text-white/35">
                            {crmForm.contacted_at
                              ? formatDate(
                                  crmForm.contacted_at
                                )
                              : "Not contacted yet"}
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                          <div className="flex items-center gap-2">
                            <CheckCircle2
                              size={15}
                              className="text-emerald-300"
                            />

                            <p className="text-xs font-medium text-white/60">
                              Closed
                            </p>
                          </div>

                          <p className="mt-2 text-xs text-white/35">
                            {crmForm.closed_at
                              ? formatDate(
                                  crmForm.closed_at
                                )
                              : "Not closed yet"}
                          </p>
                        </div>
                      </div>

                      {/* Save */}
                      <button
                        onClick={saveCrmDetails}
                        disabled={savingCrm}
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 text-sm font-semibold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {savingCrm ? (
                          <>
                            <RefreshCw
                              size={17}
                              className="animate-spin"
                            />
                            Saving Changes...
                          </>
                        ) : (
                          <>
                            <Check size={17} />
                            Save Lead Changes
                          </>
                        )}
                      </button>

                      {/* Quick Status */}
                      <div>
                        <p className="mb-2 text-xs font-medium text-white/40">
                          Quick Status
                        </p>

                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {STATUS_OPTIONS.map(
                            (option) => (
                              <button
                                key={option.value}
                                onClick={() =>
                                  quickStatusUpdate(
                                    selectedEnquiry.id,
                                    option.value
                                  )
                                }
                                disabled={
                                  updatingId ===
                                  selectedEnquiry.id
                                }
                                className={`rounded-xl border px-3 py-2.5 text-xs transition ${
                                  crmForm.status ===
                                  option.value
                                    ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                                    : "border-white/10 bg-white/[0.02] text-white/45 hover:bg-white/[0.05] hover:text-white"
                                } disabled:opacity-50`}
                              >
                                {updatingId ===
                                selectedEnquiry.id ? (
                                  <RefreshCw
                                    size={14}
                                    className="mx-auto animate-spin"
                                  />
                                ) : (
                                  option.label
                                )}
                              </button>
                            )
                          )}
                        </div>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() =>
                          deleteEnquiry(
                            selectedEnquiry.id
                          )
                        }
                        disabled={
                          deletingId ===
                          selectedEnquiry.id
                        }
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-400/10 bg-red-400/[0.03] px-4 py-3 text-xs font-medium text-red-300/60 transition hover:bg-red-400/10 hover:text-red-300 disabled:opacity-50"
                      >
                        {deletingId ===
                        selectedEnquiry.id ? (
                          <RefreshCw
                            size={15}
                            className="animate-spin"
                          />
                        ) : (
                          <Trash2 size={15} />
                        )}
                        Delete Lead
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}