import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled runtime error captured by ErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] text-[#F5F5F7] flex items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 rounded-2xl bg-[#141418] border border-[#FF1744]/30 shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FF1744]/10 border border-[#FF1744]/40 flex items-center justify-center text-[#FF1744] text-2xl font-bold">
              !
            </div>
            <h1 className="text-2xl font-bold font-display text-white mb-2">Something went wrong</h1>
            <p className="text-gray-400 text-sm mb-6">
              A temporary rendering glitch occurred in your browser session.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-[#FF1744] hover:bg-[#D50000] text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-[#FF1744]/20"
            >
              Reload Portfolio
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
