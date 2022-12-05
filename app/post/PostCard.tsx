import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import getData from "../../lib/getData";
import TempImg from "../../public/assets/images/393-2300x1200.jpg";
import PostInfo from "./PostInfo.client";

interface PostCardProps {
  title: string;
  id: number;
}

export default function PostCard({ title, id }: PostCardProps) {
  const data = use(getData().SSR(`/posts/${id}`));

  console.log(`[${id}]: `, data);

  return (
    <div className="flex flex-col rounded-lg bg-white shadow-md w-full md:w-1/2 lg:w-[20rem]">
      <div className="img w-full bg-red-100 aspect-[23_/_12]">
        <Image src={TempImg} alt="timage" placeholder="blur" />
        {/* Image를 src로 가져온다면 */}
        {/* <Image
          src="https://picsum.photos/2300/1200"
          alt="timage"
          placeholder="blur"
          blurDataURL="https://picsum.photos/230/120"
          width={2300}
          height={1200}
        /> */}
      </div>
      <div className="p-4">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p>contents</p>

          <p>2022년 11월 23일</p>
        </div>
        <div>
          <Link href={`/post/${id}`}>Click Me!</Link>
        </div>
      </div>
    </div>
  );
}
