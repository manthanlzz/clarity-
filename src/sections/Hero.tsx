import Button from "@/components/Button";




export default function Hero() {
    return (
    <section className="py-24">
        <div className="container">
            <div className="flex justify-center">
            <div className="inline-flex py-1 px-3 rounded-full text-white font-semibold animated-waves">
            Transforming workflows
             </div>

                 </div>
            <h1 className="text-6xl md:text-7xl font-medium text-center mt-6">Creating intuitive, user-focused digital experiences.</h1>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">Design tools shouldn&apos;t slow you down. Clarity combines powerful features with
                an intuitive interface that keeps you in your creative flow.
            </p>
            <form className="flex flex-wrap gap-2 border border-white/60 rounded-full p-2 mt-8 max-w-lg mx-auto">
  <input
    type="email"
    placeholder="Enter your email"
    className="bg-transparent px-4 flex-1 min-w-0"
  />
  <Button
    type="submit"
    variant="primary"
    className="w-full sm:w-auto"
    size="sm"
  >
    Sign Up
  </Button>
</form>

        </div>
    </section>
    );
}
