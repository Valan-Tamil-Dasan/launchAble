type TitleProps = {
  title: string;
};

export function Title({ title }: TitleProps) {
  return (
    <div className="flex justify-center">
      <h1 className="text-4xl font-bold mt-10 mb-20">
        {title}
      </h1>
    </div>
  );
}
