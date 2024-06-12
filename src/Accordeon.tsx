import plusIcon from "./assets/images/icon-plus.svg";
import minusIcon from "./assets/images/icon-minus.svg";

export type AccordeonProps = {
  topic: string;
  content: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function Accordeon({
  topic,
  content,
  open,
  onOpenChange,
}: AccordeonProps) {
  return (
    <div className={`${open ? "space-y-6" : ""}`}>
      <a
        tabIndex={0}
        className="flex flex-row justify-between gap-6 items-center text-purple-dark hover:text-pink hover:cursor-pointer focus-visible:ring-2 focus-visible:ring-pink ring-offset-4 outline-none"
        onClick={() => onOpenChange(!open)}
        onKeyDown={event => ["Enter", " "].includes(event.key) && onOpenChange(!open)}
      >
        <span className="font-semibold leading-[19px] desktop:text-lg desktop:leading-[21.1px]">
          {topic}
        </span>
        <img
          className="size-[30px] flex-shrink-0"
          src={open ? minusIcon : plusIcon}
          alt=""
        />
      </a>
      <div
        className={`${
          open ? "h-auto opacity-100" : "h-0 opacity-0"
        } overflow-hidden text-purple-pale text-sm desktop:text-base leading-[150%] transition-all`}
      >
        {content}
      </div>
    </div>
  );
}
