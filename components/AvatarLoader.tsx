import Image from 'next/image';


function AvatarLoader() {
    return (
        <div className="h-full flex justify-center items-center grow">
            <Image
                src="https://i.imgur.com/P32cW7G.png"
                alt="Loading"
                width={170}
                height={170}
                className="rounded-full customBounce"
            />
        </div>
    )
}
export default AvatarLoader