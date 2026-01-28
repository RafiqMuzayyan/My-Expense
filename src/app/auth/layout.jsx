import Image from "next/image";

export default function AuthLayout({ children }) {
    return(
        <section className="flex justify-between">

            {children}

            {/* image */}
            <div className='w-[40%] h-screen'>
            <Image
                src="/auth-image.webp"
                alt='a'
                width={1000}
                height={2000}
                className='w-full h-full object-cover '
            />
            </div>

        </section>
    )
}