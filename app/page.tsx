// app/page.tsx - ČISTA STRANICA
export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-8">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    TanStack Query + Next.js 16 🚀
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Tvoj projekat je 100% funkcionalan!
                </p>
                <div className="space-y-4">
                    <a
                        href="/test2"
                        className="block w-full max-w-md mx-auto p-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                    >
                        ✅ Test TanStack Query (radi!)
                    </a>
                    <a
                        href="/pokemon"
                        className="block w-full max-w-md mx-auto p-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                    >
                        ⚡ Pokemon stranica
                    </a>
                </div>
            </div>
        </div>
    );
}
