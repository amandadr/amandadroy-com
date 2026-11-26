import { Prose } from "@/components/Prose";
import type { ContentBlock } from "@/lib/types";

type ContentBlocksProps = {
  blocks: ContentBlock[];
};

export function ContentBlocks({ blocks }: ContentBlocksProps) {
  return (
    <>
      {blocks.map((block, index) => {
        const key = `${block.type}-${block.heading ?? index}`;

        if (block.type === "prose") {
          return (
            <section key={key} className="mrc-case-section">
              {block.heading ? <h2>{block.heading}</h2> : null}
              <Prose text={block.body} />
            </section>
          );
        }

        if (block.type === "steps") {
          return (
            <section key={key} className="mrc-case-section">
              {block.heading ? <h2>{block.heading}</h2> : null}
              <ol className="mrc-step-list">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>
          );
        }

        return (
          <section key={key} className="mrc-case-section">
            {block.heading ? <h2>{block.heading}</h2> : null}
            <div className="mrc-table-wrap">
              <table className="mrc-table">
                {block.caption ? <caption>{block.caption}</caption> : null}
                <thead>
                  <tr>
                    {block.headers.map((header) => (
                      <th key={header} scope="col">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row.join("|")}>
                      {row.map((cell, cellIndex) => (
                        <td key={`${cell}-${cellIndex}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
    </>
  );
}
