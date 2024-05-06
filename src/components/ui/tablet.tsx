import Image from "next/image";

type LaptopProps = {
  imagePath: string;
};

const Tablet = (props: LaptopProps) => {
  const { imagePath } = props;

  return (
    <div className="bg-tablet shrink-0 rounded-xl p-3 shadow-lg shadow-background lg:max-w-[400px] xl:max-w-[512px]">
      <Image
        src={imagePath}
        className="w-full rounded-lg"
        alt="laptop"
        width={1280}
        height={832}
      />
    </div>
  );
};

export default Tablet;
