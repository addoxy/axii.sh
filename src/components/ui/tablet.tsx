import Image from "next/image";

type LaptopProps = {
  imagePath: string;
};

const Tablet = (props: LaptopProps) => {
  const { imagePath } = props;

  return (
    <div className="bg-tablet max-w-[512px] shrink-0 rounded-xl p-3 shadow-lg shadow-background">
      <Image
        src={imagePath}
        className="relative w-full rounded-lg"
        alt="laptop"
        width={1280}
        height={832}
      />
    </div>
  );
};

export default Tablet;
