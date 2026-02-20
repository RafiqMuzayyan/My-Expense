import Image from "next/image";

export default function AuthLayout({ children }) {
    return(
        <section className="flex justify-between">

            {children}

            {/* image */}
            <div className='w-120 h-screen hidden lg:block'>
                <Image
                    src="/auth-image.png"
                    alt='a'
                    width={1000}
                    height={2000}
                    priority
                    className='w-full h-full object-cover '
                />
            </div>

        </section>
    )
}