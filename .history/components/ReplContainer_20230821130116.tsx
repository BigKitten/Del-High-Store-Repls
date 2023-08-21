import { rcss, icons, Surface, Text, IconButton, AccordionItem } from "../rui";
import { useNavigate } from "react-router-dom";
import gql from "../components/gql";
import * as GraphQLTypes from "../components/types";
import Image from "next/image";

// Implement deletion history, restoring
// using localStorage

type PerReplData = {
  usage: number;
  percentage: number;
  repl: {
    id: string;
    slug: string;
    url: string;
    title: string;
    nextPagePathname: string;
    iconUrl: string;
  };
};

type Data = {
  replData: PerReplData;
  SID: string;
  handleDeleteRepl: HandleDeleteReplType;
};

type HandleDeleteReplType = (replID: string) => GraphQLTypes.DeleteReplMutation;

const ReplContainer = (data: Data) => {
  const SID: string = data.SID;
  const replData: PerReplData = data.replData;
  const handleDeleteRepl: HandleDeleteReplType = data.handleDeleteRepl;
  console.log(replData);

  const bytesToGiB = (bytes: number) => {
    return bytes / 1073741824; // 1024^3 (1 GiB)
  };

  return (
    <li
      css={[
        rcss.flex.row,
        rcss.rowWithGap(8),
        { height: "fit-content", maxHeight: "40px", alignItems: "center" },
      ]}
    >
      <AccordionItem
        css={[
          rcss.flex.row,
          rcss.rowWithGap(8),
          { height: "fit-content", maxHeight: "40px", alignItems: "center" },
        ]}
        headerContent={
          <div
            css={[
              rcss.flex.row,
              rcss.rowWithGap(8),
              {
                height: "fit-content",
                maxHeight: "40px",
                alignItems: "center",
              },
            ]}
          >
            <a
              href={`https://replit.com${replData.repl.url}`}
              css={[
                rcss.flex.row,
                rcss.rowWithGap(8),
                { textDecoration: "none", width: "50vw", alignItems: "center" },
              ]}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={replData.repl.iconUrl}
                alt="image"
                css={[
                  rcss.borderRadius(4),
                  { border: "1px solid var(--outline-default)" },
                ]}
                width="32px"
                height="32px"
              />
              <Text
                css={[
                  rcss.color("foregroundDefault"),
                  { textDecoration: "none" },
                ]}
              >
                {replData.repl.title}
              </Text>
              <svg width="100%" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="0%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="var(--outline-default)"
                ></line>
              </svg>
              <Text css={[rcss.color("foregroundDefault")]}>
                {bytesToGiB(replData.usage).toFixed(4)} GiB
              </Text>
            </a>
            <IconButton
              alt={`Delete ${replData.repl.title}`}
              size={28}
              onClick={() => handleDeleteRepl(replData.repl.id)}
              disabled
            >
              <icons.Trash />
            </IconButton>
          </div>
        }
      >
        <iframe src={`https://replit.com${replData.repl.url}`} />
      </AccordionItem>
    </li>
  );
};

export default ReplContainer;
