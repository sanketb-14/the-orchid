import SignInBtn from "@/components/SingInBtn";
import { ShieldCheckIcon, SparklesIcon, UserCircleIcon, LockClosedIcon } from "@heroicons/react/24/solid";

export const metadata = {
    title:"Login"
}

export default function Page() {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          {/* Decorative Background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>

          {/* Login Card */}
          <div className="bg-base-100 rounded-3xl shadow-2xl p-8 sm:p-10 space-y-8">
            {/* Logo/Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-primary to-secondary p-4 rounded-full">
                  <UserCircleIcon className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-2">
                <SparklesIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Secure Login</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-base-content">
                Welcome Back
              </h2>
              <p className="text-base-content/60 text-lg">
                Sign in to access your guest account
              </p>
            </div>

            {/* Sign In Button */}
            <div className="space-y-4">
              <SignInBtn/>
            </div>

            {/* Features List */}
            <div className="pt-6 border-t border-base-300 space-y-3">
              <p className="text-sm font-semibold text-base-content/70 text-center mb-4">
                What you can do:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-base-content/70">
                  <div className="bg-success/10 rounded-full p-2">
                    <ShieldCheckIcon className="w-4 h-4 text-success" />
                  </div>
                  <span>Manage your reservations</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-base-content/70">
                  <div className="bg-info/10 rounded-full p-2">
                    <LockClosedIcon className="w-4 h-4 text-info" />
                  </div>
                  <span>Update your profile information</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-base-content/70">
                  <div className="bg-primary/10 rounded-full p-2">
                    <SparklesIcon className="w-4 h-4 text-primary" />
                  </div>
                  <span>Access exclusive guest benefits</span>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="bg-base-200 rounded-xl p-4 text-center">
              <p className="text-xs text-base-content/60">
                Your privacy is protected. We use secure authentication.
              </p>
            </div>
          </div>

          {/* Help Text */}
          <div className="text-center mt-6">
            <p className="text-sm text-base-content/60">
              Need help? Contact our{" "}
              <a href="#" className="text-accent hover:text-accent/80 font-semibold transition-colors">
                support team
              </a>
            </p>
          </div>
        </div>
      </div>
    );
}