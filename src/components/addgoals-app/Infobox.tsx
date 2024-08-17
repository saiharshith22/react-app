import { type ReactNode } from "react";

// type InfoboxProps = {
//   mode: "hint" | "warning";
//   severity?: "low" | "medium" | "high";
//   children: ReactNode;
// };

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoboxProps = HintBoxProps | WarningBoxProps;

// we only want severity for mode: warning. so, by doing this we can conditioally pass severity for mode warning and for mode hint w no need to pass it

const Infobox = (props: InfoboxProps) => {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default Infobox;
