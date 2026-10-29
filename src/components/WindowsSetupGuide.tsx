import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  X, 
  AlertCircle, 
  FileCode2, 
  CheckCircle2, 
  FolderTree 
} from 'lucide-react';

interface WindowsSetupGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WindowsSetupGuide: React.FC<WindowsSetupGuideProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const STEPS = [
    {
      title: 'Step 1: Open VS Code & Open Terminal',
      description: 'Open your RecruitSafeAI folder in VS Code, then press Ctrl + ~ (or Terminal → New Terminal).',
      command: '# In VS Code terminal (PowerShell)',
    },
    {
      title: 'Step 2: Check Python Version',
      description: 'Ensure Python 3.10+ is installed on your Windows machine.',
      command: 'python --version',
    },
    {
      title: 'Step 3: Create an Isolated Virtual Environment',
      description: 'Keeps project libraries segregated so they do not conflict with other Python tools.',
      command: 'python -m venv venv',
    },
    {
      title: 'Step 4: Activate the Virtual Environment',
      description: 'Run the PowerShell activation script. You should see (venv) appear in your prompt.',
      command: '.\\venv\\Scripts\\Activate.ps1',
      tip: 'If you see an ExecutionPolicy error, run: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser',
    },
    {
      title: 'Step 5: Install Project Dependencies',
      description: 'Installs Streamlit directly into your active virtual environment.',
      command: 'pip install -r requirements.txt',
    },
    {
      title: 'Step 6: Launch RecruitSafe AI Streamlit Server',
      description: 'Runs the local server. Your browser will automatically open at http://localhost:8501.',
      command: 'streamlit run app.py',
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close setup guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 text-xs font-semibold text-emerald-400 mb-2">
          <Terminal className="w-4 h-4" />
          <span>PHASE 1 WINDOWS & PYTHON GUIDE</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
          How to Run RecruitSafe AI on Windows
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          Simple step-by-step instructions for running the Streamlit Python application locally using VS Code and a virtual environment.
        </p>

        {/* Steps List */}
        <div className="space-y-4 mb-8">
          {STEPS.map((step, idx) => (
            <div key={step.title} className="bg-slate-950 rounded-xl border border-slate-800 p-4">
              <div className="flex items-start justify-between gap-3 mb-1.5">
                <h3 className="text-xs sm:text-sm font-bold text-white">{step.title}</h3>
                <span className="text-[10px] font-mono text-slate-500">0{idx + 1}</span>
              </div>
              <p className="text-xs text-slate-400 mb-2.5 leading-relaxed">{step.description}</p>

              <div className="flex items-center justify-between bg-slate-900 rounded-lg p-2.5 border border-slate-800 font-mono text-xs">
                <code className="text-emerald-400 break-all">{step.command}</code>
                <button
                  type="button"
                  onClick={() => handleCopy(step.command, idx)}
                  className="ml-2 p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors shrink-0"
                  title="Copy command"
                  aria-label={`Copy command for ${step.title}`}
                >
                  {copiedIndex === idx ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {step.tip && (
                <div className="mt-2 text-[11px] text-amber-400/90 flex items-start gap-1.5 bg-amber-950/20 p-2 rounded border border-amber-900/30">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>{step.tip}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* File Structure Breakdown */}
        <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 mb-6">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <FolderTree className="w-4 h-4 text-emerald-400" />
            <span>Files Created for Phase 1</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
              <span className="font-mono text-emerald-400 font-semibold block">app.py</span>
              <span className="text-slate-400 text-[11px]">Streamlit landing page & interactive demo</span>
            </div>
            <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
              <span className="font-mono text-emerald-400 font-semibold block">config.py</span>
              <span className="text-slate-400 text-[11px]">Global settings, version, thresholds & mission</span>
            </div>
            <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
              <span className="font-mono text-emerald-400 font-semibold block">requirements.txt</span>
              <span className="text-slate-400 text-[11px]">Pinned Python package (streamlit)</span>
            </div>
            <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
              <span className="font-mono text-emerald-400 font-semibold block">README.md</span>
              <span className="text-slate-400 text-[11px]">Windows walkthrough & interview prep notes</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs">
          <span className="text-slate-400">Ready to test Phase 1 on Windows!</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
