import "../globals.css";
export const metadata = {
  title: "Next Auth",
  description: "Next.js Athentication",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header id="auth-header">
          <p>Welcome back!</p>
          <form>
            <button>Logout</button>
          </form>
        </header>
        {children}
      </body>
    </html>
  );
}