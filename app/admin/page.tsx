"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AdminLogin() {
  const [error, setError] = useState("");
  const router = useRouter();
  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   // Check for error parameter in URL
  //   const errorParam = searchParams.get('error');
  //   if (errorParam === 'invalid_credentials') {
  //     setError('Invalid username or password');
  //   }
  // }, [searchParams]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    
    const formData = new FormData(e.currentTarget);
    const username = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Create base64 encoded credentials
    const credentials = btoa(`${username}:${password}`);

    try {
      const response = await fetch("/studio", {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });

      if (response.ok) {
        router.push("/studio");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-white flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          alt="Your Company"
          src="/Logo.svg"
          width={200}
          height={200}
          className="mx-auto h-16 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-800">
          Sign in to LKT Marine CMS
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#024caa] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#024caa] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#024caa] px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#024caa]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#024caa]"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
  