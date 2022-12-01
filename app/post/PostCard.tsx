import Image from "next/image";
import TempImg from "../../public/assets/images/393-2300x1200.jpg";

interface PostCardProps {
  title: string;
  id: number;
}

const PostCard: React.FC<PostCardProps> = ({ title, id }) => {
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
        <div>footer</div>
      </div>
    </div>
  );
};

export default PostCard;
