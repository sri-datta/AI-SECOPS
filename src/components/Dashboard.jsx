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
  User,
  GitPullRequest,
  CheckCircle,
  XCircle,
  HardHat,
  Monitor,
  Tractor,
  Swords,
  Rocket,
  Wrench,
  Layers,
  FlaskConical,
  Package,
  Store as Shop 
} from 'lucide-react';
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

// This is the main component that manages state and renders the correct view
const App = () => {
  const [activePage, setActivePage] = useState('Command Center');

  const renderContent = () => {
    // Mock data for the components
    const threats = [
      { id: 1, type: 'API Attack', location: 'EU-West', time: '22:41:37', severity: 'high' },
      { id: 2, type: 'Model Drift', location: 'US-East', time: '22:41:34', severity: 'medium' },
      { id: 3, type: 'Model Drift', location: 'US-West', time: '22:41:31', severity: 'medium' },
      { id: 4, type: 'Model Drift', location: 'EU-West', time: '22:41:28', severity: 'medium' },
      { id: 5, type: 'API Attack', location: 'US-East', time: '22:41:25', severity: 'high' }
    ];
    
    const getSeverityColor = (severity) => {
      switch(severity) {
        case 'high': return 'bg-red-500';
        case 'medium': return 'bg-yellow-500';
        case 'low': return 'bg-blue-500';
        default: return 'bg-gray-500';
      }
    };
    
    const threatPredictions = [
      { label: 'Prompt Injection Surge', value: 78, impact: 'High Impact', eta: '48 hours', color: 'bg-red-500' },
      { label: 'Model Drift Event', value: 65, impact: 'Medium Impact', eta: '1 week', color: 'bg-yellow-500' },
      { label: 'Supply Chain Attack', value: 23, impact: 'Critical Impact', eta: '30 days', color: 'bg-red-500' },
      { label: 'API Overload', value: 89, impact: 'Low Impact', eta: '24 hours', color: 'bg-blue-500' },
    ];
    
    const radialData = [{ name: 'A', value: 70, fill: '#f97316' }];
    
    // Main Dashboard Content
    const DashboardContent = () => (
      <div className="flex-1 p-6 overflow-y-auto">
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
        
        {/* Board Metrics & Risk Appetite - MOVED ABOVE */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="w-6 h-6 text-purple-400" />
              <h2 className="text-lg font-semibold">Board Metrics</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-slate-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">342%</div>
                <div className="text-sm text-gray-400">Security ROI</div>
              </div>
              <div className="bg-slate-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">$12.4M</div>
                <div className="text-sm text-gray-400">Prevented Loss</div>
              </div>
              <div className="bg-slate-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">Top 5%</div>
                <div className="text-sm text-gray-400">Peer Ranking</div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-orange-400" />
              <h2 className="text-lg font-semibold">Risk Appetite</h2>
            </div>
            <div className="relative w-40 h-40 mx-auto">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart innerRadius="70%" outerRadius="90%" data={radialData} startAngle={90} endAngle={-270}>
                  <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                  <RadialBar dataKey="value" cornerRadius={10} angleAxisId={0} background={{ fill: '#475569' }} fill="#f97316" />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="text-xl font-bold text-orange-400">70%</div>
                <div className="text-xs text-gray-400 text-center">within tolerance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-span-2 space-y-6">
            {/* Global Threat Map */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 h-96">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Global Threat Map</h2>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-400 text-sm">Live</span>
                </div>
              </div>
              {/* Placeholder for Map */}
              <div className="flex items-center justify-center h-full">
                <Globe className="w-48 h-48 text-gray-700 animate-pulse" />
              </div>
            </div>
            
            {/* AI Supply Chain & Compliance Status */}
            <div className="grid grid-cols-2 gap-6">
              {/* AI Supply Chain */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center space-x-2 mb-4">
                  <GitPullRequest className="w-6 h-6 text-gray-400" />
                  <h3 className="text-lg font-semibold">AI Supply Chain</h3>
                </div>
                <div className="space-y-2">
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-gray-300">New dependencies found</h4>
                    <p className="text-sm text-gray-500">2 pending audits</p>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-gray-300">Model drift identified</h4>
                    <p className="text-sm text-gray-500">Review required</p>
                  </div>
                </div>
              </div>
              
              {/* Compliance Status */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="text-lg font-semibold">Compliance Status</h3>
                </div>
                <div className="space-y-2">
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-gray-300">SOC 2 Type 2</h4>
                    <p className="text-sm text-green-500">89% compliant</p>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-gray-300">GDPR</h4>
                    <p className="text-sm text-orange-500">75% compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="col-span-1 space-y-6">
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
            
            {/* Threat Predictions */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h2 className="text-lg font-semibold mb-4">Threat Predictions</h2>
              <div className="space-y-4">
                {threatPredictions.map((pred, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-300">{pred.label}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${pred.color}`}>{pred.impact}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                      <div className="h-2.5 rounded-full transition-all duration-500" style={{ width: `${pred.value}%`, backgroundColor: `var(--tw-bg-${pred.color.replace('bg-', '')})` }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{pred.value}%</span>
                      <span>{pred.eta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Red Team Simulator */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h2 className="text-lg font-semibold mb-4">Red Team Simulator</h2>
              <div className="flex flex-col items-center">
                <HardHat className="w-12 h-12 text-red-500 mb-4" />
                <p className="text-sm text-gray-400 text-center mb-4">
                  Simulate real-world attacks on your AI systems
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Start Attack Simulation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
    // Placeholder content for other pages
    const PlaceholderContent = ({ title, description }) => (
      <div className="text-gray-400 text-center py-20">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p>{description}</p>
      </div>
    );

    switch (activePage) {
      case 'Command Center':
        return <DashboardContent />;
      case 'Threat Intel':
        return <PlaceholderContent title="Threat Intel" description="This is the Threat Intelligence dashboard page." />;
      case 'AI Inventory':
        return <PlaceholderContent title="AI Inventory" description="This is the AI Inventory dashboard page." />;
      case 'Supply Chain':
        return <PlaceholderContent title="Supply Chain" description="This is the Supply Chain page." />;
      case 'Monitoring':
        return <PlaceholderContent title="Monitoring" description="This is the Monitoring page." />;
      case 'Compliance':
        return <PlaceholderContent title="Compliance" description="This is the Compliance page." />;
      case 'Attack Simulator':
        return <PlaceholderContent title="Attack Simulator" description="This is the Attack Simulator page." />;
      case 'Threat Hunting':
        return <PlaceholderContent title="Threat Hunting" description="This is the Threat Hunting page." />;
      case 'Orchestration':
        return <PlaceholderContent title="Orchestration" description="This is the Orchestration page." />;
      case 'Marketplace':
        return <PlaceholderContent title="Marketplace" description="This is the Marketplace page." />;
      case 'Dev Portal':
        return <PlaceholderContent title="Dev Portal" description="This is the Dev Portal page." />;
      case 'Analytics':
        return <PlaceholderContent title="Analytics" description="This is the Analytics page." />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white font-inter">
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
            <button className="flex items-center space-x-2 bg-slate-700 px-3 py-2 rounded hover:bg-slate-600 transition-colors">
              <Mic className="w-4 h-4" />
              <span className="text-sm">Voice Command</span>
            </button>
            <button className="p-2 hover:bg-slate-700 rounded transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Modern Blue</span>
              <button className="p-1 hover:bg-slate-700 rounded transition-colors">
                <Settings className="w-4 h-4" />
              </button>
            </div>
            <button className="p-2 hover:bg-slate-700 rounded transition-colors relative">
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
        <aside className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col">
          <nav className="p-4 space-y-2 flex-1">
            <button
              className={`flex flex-col items-start p-3 rounded-lg w-full transition-colors ${
                activePage === 'Command Center' ? 'bg-blue-600' : 'hover:bg-slate-700'
              }`}
              onClick={() => setActivePage('Command Center')}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5" />
                  <span className="font-medium">Command Center</span>
                  <span className="bg-green-500 text-xs px-2 py-1 rounded text-black font-bold">LIVE</span>
                </div>
              </div>
              <p className="text-xs text-blue-100 pl-7">Executive Overview</p>
            </button>
            
            <div className="space-y-1">
              {/* Threat Intel */}
              <button
                className={`flex items-center justify-between p-2 rounded w-full transition-colors ${
                  activePage === 'Threat Intel' ? 'bg-slate-700' : 'hover:bg-slate-700'
                }`}
                onClick={() => setActivePage('Threat Intel')}
              >
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <span className="text-sm">Threat Intel</span>
                </div>
                <span className="bg-red-500 text-xs px-2 py-1 rounded">18</span>
              </button>

              {/* AI Inventory */}
              <button
                className={`flex items-center justify-between p-2 rounded w-full transition-colors ${
                  activePage === 'AI Inventory' ? 'bg-slate-700' : 'hover:bg-slate-700'
                }`}
                onClick={() => setActivePage('AI Inventory')}
              >
                <div className="flex items-center space-x-2">
                  <Database className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">AI Inventory</span>
                </div>
                <span className="bg-slate-600 text-xs px-2 py-1 rounded">234</span>
              </button>
              
              {/* Supply Chain */}
              <button
                className={`flex flex-col items-start p-2 rounded w-full transition-colors ${
                  activePage === 'Supply Chain' ? 'bg-slate-700' : 'hover:bg-slate-700'
                }`}
                onClick={() => setActivePage('Supply Chain')}
              >
                <div className="flex items-center space-x-2">
                  <Package className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">Supply Chain</span>
                </div>
                <span className="text-xs text-gray-400 pl-6">dependencies & risks</span>
              </button>
              
              {/* Monitoring */}
              <button
                className={`flex items-center justify-between p-2 rounded w-full transition-colors ${
                  activePage === 'Monitoring' ? 'bg-slate-700' : 'hover:bg-slate-700'
                }`}
                onClick={() => setActivePage('Monitoring')}
              >
                <div className="flex items-center space-x-2">
                  <Monitor className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">Monitoring</span>
                </div>
                <span className="bg-green-500 text-xs px-2 py-1 rounded text-black font-bold">ACTIVE</span>
              </button>

              {/* Compliance */}
              <button
                className={`flex items-center justify-between p-2 rounded w-full transition-colors ${
                  activePage === 'Compliance' ? 'bg-slate-700' : 'hover:bg-slate-700'
                }`}
                onClick={() => setActivePage('Compliance')}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Compliance</span>
                </div>
                <span className="text-xs text-gray-400">regulatory tracking</span>
              </button>

              {/* Attack Simulator */}
              <button
                className={`flex items-center justify-between p-2 rounded w-full transition-colors ${
                  activePage === 'Attack Simulator' ? 'bg-slate-700' : 'hover:bg-slate-700'
                }`}
                onClick={() => setActivePage('Attack Simulator')}
              >
                <div className="flex items-center space-x-2">
                  <Swords className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">Attack Simulator</span>
                </div>
                <span className="text-xs text-gray-400">Red Team Testing</span>
              </button>
              
              {/* Threat Hunting */}
              <button
                className={`flex items-center justify-between p-2 rounded w-full transition-colors ${
                  activePage === 'Threat Hunting' ? 'bg-slate-700' : 'hover:bg-slate-700'
                }`}
                onClick={() => setActivePage('Threat Hunting')}
              >
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">Threat Hunting</span>
                </div>
                <span className="text-xs text-gray-400">Advanced Analysis</span>
              </button>

              {/* Orchestration */}
              <button
                className={`flex items-center justify-between p-2 rounded w-full transition-colors ${
                  activePage === 'Orchestration' ? 'bg-slate-700' : 'hover:bg-slate-700'
                }`}
                onClick={() => setActivePage('Orchestration')}
              >
                <div className="flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">Orchestration</span>
                </div>
                <span className="text-xs text-gray-400">Automated Response</span>
              </button>
              
              {/* Marketplace */}
              <button
                className={`flex items-center justify-between p-2 rounded w-full transition-colors ${
                  activePage === 'Marketplace' ? 'bg-slate-700' : 'hover:bg-slate-700'
                }`}
                onClick={() => setActivePage('Marketplace')}
              >
                <div className="flex items-center space-x-2">
                  <Shop className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">Marketplace</span>
                </div>
                <span className="text-xs text-gray-400">Secure Modals</span>
              </button>
            </div>
            
            <div className="space-y-1 mt-8">
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-xs font-medium uppercase text-gray-400">Dev Portal</span>
                </div>
                <span className="text-xs text-gray-400">Secure Coding</span>
              </div>
              
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-xs font-medium uppercase text-gray-400">Analytics</span>
                </div>
                <span className="text-xs text-gray-400">Proactive Security</span>
              </div>
            </div>
            
            {/* System Status */}
            <div className="bg-slate-700 rounded-lg p-4 mt-8">
              <h4 className="text-xs uppercase font-medium text-gray-400 mb-2">System Status</h4>
              <div className="flex justify-between items-center text-sm mb-1">
                <span>AI Systems</span>
                <span className="text-green-500">234</span>
              </div>
              <div className="flex justify-between items-center text-sm mb-1">
                <span>Active Threats</span>
                <span className="text-red-500">18</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Response Time</span>
                <span className="text-green-500">1.89s</span>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
