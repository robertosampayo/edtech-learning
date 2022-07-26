import {
  Chapter,
  ChapterColor,
  DotsIcon,
  ChapterContent,
  ChapterPlay,
  PlayIcon,
} from "./ChapterPill.styles";
import { IoMdTime } from "react-icons/io";
import { IChapter } from "../../types";

interface IChapterProps {
  chapter: IChapter;
  onClick: () => void;
}

const ChapterPill = (props: IChapterProps) => {
  return (
    <Chapter>
      <ChapterColor>
        <DotsIcon />
      </ChapterColor>
      <ChapterContent>
        <span>
          <p>
            <IoMdTime size="1rem" />
            {`${new Date(props.chapter.duration).getMinutes()}:${new Date(
              props.chapter.duration
            ).getSeconds()} mins`}
          </p>
        </span>
        <h3>{props.chapter.title}</h3>
        <p>{props.chapter.description}</p>
      </ChapterContent>
      <ChapterPlay>
        <PlayIcon />
      </ChapterPlay>
    </Chapter>
  );
};

export default ChapterPill;
