import { useEffect, useState } from "react";
import { auth, db } from "../lib/firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged, signOut, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { Sidebar } from "../components/ui/dashboard-with-collapsible-sidebar";
import { LogOut, Moon, Sun, Save, Lock, Building2, Bell, Globe, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function AdminSettings() {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [adminUser, setAdminUser] = useState<any>(null);
  const [isDark, setIsDark] = useState(false);
  const [saving, setSaving] = useState(false);
  const [pwSaving, setPwSaving] = useState(false);

  const [profile, setProfile] = useState({ agencyName: "iDEED", contactEmail: "ideed.support@gmail.com", phone: "+91 8778 70 70 86", location: "Madurai, Tamil Nadu, India", website: "https://ideed.in" });
  const [notifications, setNotifications] = useState({ newLeadEmail: true, convertedLeadEmail: true, projectUpdateEmail: false });
  const [pw, setPw] = useState({ current: "", newPw: "", confirm: "" });
  const [pwMsg, setPwMsg] = useState("");
  const [saveMsg, setSaveMsg] = useState("");

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setAdminUser(user);
        setCheckingAuth(false);
        // Load settings from Firestore
        try {
          const snap = await getDoc(doc(db, "settings", "admin"));
          if (snap.exists()) {
            const data = snap.data();
            if (data.profile) setProfile(data.profile);
            if (data.notifications) setNotifications(data.notifications);
          }
        } catch (e) {
          console.error("Could not load settings", e);
        }
      } else {
        window.location.href = "/admin/login";
      }
    });
    return unsub;
  }, []);

  const handleSaveProfile = async () => {
    setSaving(true);
    try {
      await setDoc(doc(db, "settings", "admin"), { profile, notifications, updatedAt: serverTimestamp() }, { merge: true });
      setSaveMsg("Settings saved successfully!");
      setTimeout(() => setSaveMsg(""), 3000);
    } catch (e) {
      console.error(e);
      setSaveMsg("Error saving settings.");
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = async () => {
    setPwMsg("");
    if (pw.newPw !== pw.confirm) { setPwMsg("Passwords do not match."); return; }
    if (pw.newPw.length < 6) { setPwMsg("Password must be at least 6 characters."); return; }
    
    setPwSaving(true);
    try {
      const credential = EmailAuthProvider.credential(adminUser.email, pw.current);
      await reauthenticateWithCredential(adminUser, credential);
      await updatePassword(adminUser, pw.newPw);
      setPwMsg("Password updated successfully!");
      setPw({ current: "", newPw: "", confirm: "" });
    } catch (e: any) {
      console.error(e);
      if (e.code === "auth/wrong-password") setPwMsg("Incorrect current password.");
      else if (e.code === "auth/too-many-requests") setPwMsg("Too many attempts. Try again later.");
      else setPwMsg("Error updating password. Please try again.");
    } finally {
      setPwSaving(false);
      setTimeout(() => setPwMsg(""), 4000);
    }
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  const inputClass = "w-full mt-1 px-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors";

  return (
    <div className={`flex min-h-[100vh] w-full ${isDark ? 'dark' : ''} font-sans`}>
      <div className="flex w-full bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Sidebar />

        <main className="flex-1 overflow-x-hidden pt-8 px-6 md:px-10 pb-20">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <h1 className="text-3xl font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Settings</h1>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Configure your CRM platform preferences.</p>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setIsDark(!isDark)} className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 transition-colors shadow-sm">
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button onClick={() => signOut(auth)} className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors shadow-sm">
                <LogOut size={20} />
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left column — profile + notifications */}
            <div className="lg:col-span-2 space-y-6">

              {/* Agency Profile */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 size={20} className="text-blue-600" />
                  <h2 className="text-lg font-bold">Agency Profile</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider">Agency Name</label>
                    <input value={profile.agencyName} onChange={e => setProfile({...profile, agencyName: e.target.value})} className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider">Contact Email</label>
                    <input type="email" value={profile.contactEmail} onChange={e => setProfile({...profile, contactEmail: e.target.value})} className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider">Phone</label>
                    <input value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})} className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider">Location</label>
                    <input value={profile.location} onChange={e => setProfile({...profile, location: e.target.value})} className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider">Website URL</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} style={{marginTop: "2px"}} />
                      <input value={profile.website} onChange={e => setProfile({...profile, website: e.target.value})} className={`${inputClass} pl-9`} />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Notification Preferences */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Bell size={20} className="text-blue-600" />
                  <h2 className="text-lg font-bold">Email Notifications</h2>
                </div>
                <div className="space-y-4">
                  {[
                    { key: "newLeadEmail", label: "New Lead Submitted", desc: "Get notified when someone fills the contact form." },
                    { key: "convertedLeadEmail", label: "Lead Converted to Client", desc: "Get notified when a lead is marked as Converted." },
                    { key: "projectUpdateEmail", label: "Project Status Updates", desc: "Get notified when a project status changes." },
                  ].map(({ key, label, desc }) => (
                    <div key={key} className="flex items-start justify-between gap-4 py-3 border-b border-gray-100 dark:border-gray-800 last:border-0">
                      <div>
                        <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">{label}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{desc}</p>
                      </div>
                      <button
                        onClick={() => setNotifications(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))}
                        className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${notifications[key as keyof typeof notifications] ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`}
                      >
                        <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${notifications[key as keyof typeof notifications] ? 'translate-x-5' : 'translate-x-0'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Save button */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handleSaveProfile}
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/20 transition-all disabled:opacity-60"
                >
                  <Save size={16} />
                  {saving ? "Saving…" : "Save Settings"}
                </button>
                {saveMsg && <p className={`text-sm font-medium ${saveMsg.includes("Error") ? "text-red-500" : "text-green-600"}`}>{saveMsg}</p>}
              </div>
            </div>

            {/* Right column — security + info */}
            <div className="space-y-6">
              
              {/* Admin Info card */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={20} className="text-green-600" />
                  <h2 className="text-lg font-bold">Logged In As</h2>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-lg font-bold mb-3">
                  {(adminUser?.email?.[0] || "A").toUpperCase()}
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{adminUser?.email}</p>
                <p className="text-xs text-gray-500 mt-1">Super Admin • iDEED CRM</p>
              </motion.div>

              {/* Change Password */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Lock size={20} className="text-blue-600" />
                  <h2 className="text-lg font-bold">Change Password</h2>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider">Current Password</label>
                    <input type="password" value={pw.current} onChange={e => setPw({...pw, current: e.target.value})} className={inputClass} placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider">New Password</label>
                    <input type="password" value={pw.newPw} onChange={e => setPw({...pw, newPw: e.target.value})} className={inputClass} placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider">Confirm New Password</label>
                    <input type="password" value={pw.confirm} onChange={e => setPw({...pw, confirm: e.target.value})} className={inputClass} placeholder="••••••••" />
                  </div>
                  {pwMsg && <p className={`text-xs font-medium mt-1 ${pwMsg.includes("success") ? "text-green-500" : "text-red-500"}`}>{pwMsg}</p>}
                  <button
                    onClick={handleChangePassword}
                    disabled={pwSaving || !pw.current || !pw.newPw || !pw.confirm}
                    className="w-full mt-2 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-sm hover:bg-gray-700 dark:hover:bg-gray-100 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Lock size={15} />
                    {pwSaving ? "Updating…" : "Update Password"}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
