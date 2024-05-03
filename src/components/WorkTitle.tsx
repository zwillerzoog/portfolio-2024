
export default function WorkTitle(props: any) {
  return (
    <>
      <div className="flex justify-between mt-10 mb-2">
        <h4 className="text-lg md:text-xl font-semibold">{props.title}</h4>
        <h4 className="text-base md:text-lg">{props.time}</h4>
      </div>
      <hr />
    </>
  );
}
