import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Activity, 
  TrendingUp, 
  AlertTriangle, 
  Target, 
  Globe, 
  BarChart3, 
  Users, 
  Database, 
  Zap,
  Bell,
  Search,
  Settings,
  ChevronRight,
  Play,
  Download,
  Mic,
  User
} from 'lucide-react';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [threats, setThreats] = useState([
    { id: 1, type: 'API Attack', location: 'EU-West', time: '22:41:37', severity: 'high' },
    { id: 2, type: 'Model Drift', location: 'US-East', time: '22:41:34', severity: 'medium' },
    { id: 3, type: 'Model Drift', location: 'US-West', time: '22:41:31', severity: 'medium' },
    { id: 4, type: 'Model Drift', location: 'EU-West', time: '22:41:28', severity: 'medium' },
    { id: 5, type: 'API Attack', location: 'US-East', time: '22:41:25', severity: 'high' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-400" />
              <div>
                <h1 className="text-xl font-bold">AI SecOps</h1>
                <p className="text-sm text-gray-400">Command Center v10.5</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-slate-700 px-3 py-1 rounded">
              <span className="text-xs font-medium">Command Center</span>
            </div>
            <div className="flex items-center space-x-2 bg-yellow-600 px-3 py-1 rounded">
              <span className="text-xs font-bold text-black">THREAT LEVEL: MODERATE</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-slate-700 px-3 py-2 rounded hover:bg-slate-600">
              <Mic className="w-4 h-4" />
              <span className="text-sm">Voice Command</span>
            </button>
            <button className="p-2 hover:bg-slate-700 rounded">
              <Search className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Modern Blue</span>
              <button className="p-1 hover:bg-slate-700 rounded">
                <Settings className="w-4 h-4" />
              </button>
            </div>
            <button className="p-2 hover:bg-slate-700 rounded relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
            </button>
            <div className="flex items-center space-x-2">
              <User className="w-6 h-6 bg-blue-500 rounded-full p-1" />
              <div>
                <p className="text-sm font-medium">Datta</p>
                <p className="text-xs text-gray-400">Security Admin</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-800 border-r border-slate-700 min-h-screen">
          <nav className="p-4 space-y-2">
            <div className="bg-blue-600 rounded-lg p-3 mb-4">
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5" />
                <span className="font-medium">Command Center</span>
                <span className="bg-green-500 text-xs px-2 py-1 rounded text-black font-bold">LIVE</span>
              </div>
              <p className="text-xs text-blue-100 mt-1">Executive Overview</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between p-2 hover:bg-slate-700 rounded">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <span className="text-sm">Threat Intel</span>
                </div>
                <span className="bg-red-500 text-xs px-2 py-1 rounded">18</span>
              </div>

              <div className="flex items-center justify-between p-2 hover:bg-slate-700 rounded">
                <div className="flex items-center space-x-2">
                  <Database className="w-4 h-4" />
                  <span className="text-sm">AI Inventory</span>
                </div>
                <span className="bg-slate-600 text-xs px-2 py-1 rounded">234</span>
              </div>

              {/* Add more sidebar items as needed */}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Top Metrics */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <Shield className="w-6 h-6 text-green-400" />
                <span className="text-green-400 text-sm font-medium">+12%</span>
              </div>
              <div className="text-3xl font-bold text-green-400 mb-1">94.7</div>
              <div className="text-sm text-gray-400">Security Score</div>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <Activity className="w-6 h-6 text-blue-400" />
                <span className="text-sm text-gray-400">234</span>
              </div>
              <div className="text-3xl font-bold mb-1">1,186</div>
              <div className="text-sm text-gray-400">Threat Vectors Monitored</div>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <Activity className="w-6 h-6 text-green-400" />
                <span className="text-green-400 text-sm">Active</span>
              </div>
              <div className="text-3xl font-bold text-green-400 mb-1">514</div>
              <div className="text-sm text-gray-400">Attacks Blocked Today</div>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <span className="text-green-400 text-sm">Saved</span>
              </div>
              <div className="text-3xl font-bold text-green-400 mb-1">$2.4M</div>
              <div className="text-sm text-gray-400">Prevented Loss (MTD)</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-5 gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                <Play className="w-4 h-4" />
                <span className="text-sm">Run Scan</span>
              </button>
              
              <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                <Download className="w-4 h-4" />
                <span className="text-sm">Export Report</span>
              </button>
              
              <button className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                <Bell className="w-4 h-4" />
                <span className="text-sm">Configure Alerts</span>
              </button>
              
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                <Target className="w-4 h-4" />
                <span className="text-sm">Red Team Test</span>
              </button>

              <button className="bg-slate-600 hover:bg-slate-700 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                <BarChart3 className="w-4 h-4" />
                <span className="text-sm">Analytics</span>
              </button>
            </div>
          </div>

          {/* Live Threat Intelligence */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Live Threat Intelligence</h2>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 text-sm">Live</span>
              </div>
            </div>
            <div className="space-y-3">
              {threats.map((threat) => (
                <div key={threat.id} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${getSeverityColor(threat.severity)}`}></div>
                    <div>
                      <div className="text-sm font-medium">{threat.type}</div>
                      <div className="text-xs text-gray-400">{threat.location} • {threat.time}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;