"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

import dropdown from "./assets/dropdown.png";

function Faq() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="flex flex-col gap-y-3 mt-3">
      <Section
        title="Overview"
        // content="Lorem Ipsum is simply dummy text of"

        index={0}
        expandedIndex={expandedIndex}
        toggleExpand={toggleExpand}
      />
      <Section
        title="Information we collect"
        index={1}
        expandedIndex={expandedIndex}
        toggleExpand={toggleExpand}
      />
      <Section
        title="How we use the information we collect"
        index={2}
        expandedIndex={expandedIndex}
        toggleExpand={toggleExpand}
      />
      <Section
        title="Account Deletion"
        index={3}
        expandedIndex={expandedIndex}
        toggleExpand={toggleExpand}
      />{" "}
      <Section
        title="Cookies"
        index={4}
        expandedIndex={expandedIndex}
        toggleExpand={toggleExpand}
      />{" "}
      <Section
        title="Changes in Privacy Policy"
        index={5}
        expandedIndex={expandedIndex}
        toggleExpand={toggleExpand}
      />{" "}
      <Section
        title="Privacy questions and access"
        index={6}
        expandedIndex={expandedIndex}
        toggleExpand={toggleExpand}
      />{" "}
      <Section
        title="Compliances"
        index={7}
        expandedIndex={expandedIndex}
        toggleExpand={toggleExpand}
      />{" "}
      <Section
        title="Grievance Redressal Officer"
        index={8}
        expandedIndex={expandedIndex}
        toggleExpand={toggleExpand}
      />
    </div>
  );
}

function Section({ title, index, expandedIndex, toggleExpand }) {
  const isExpanded = index === expandedIndex;

  return (
    <div className="relative">
      <div
        className={`border-solid rounded-lg shadow-[1px_1px_4px_0px_rgba(0,0,0,0.05)] bg-white text-sm font-semibold text-black w-[363px]
         ml-3 p-3 py-[10px] ${
          isExpanded ? "overflow-y-auto max-h-80" : ""
        }`}
      >
        <p className="cursor-pointer" onClick={() => toggleExpand(index)}>
          {title}
        </p>
        {isExpanded && (
          <div className="mt-2 w-4/4">
            <p
              className="text-[#6B6B70] whitespace-pre-line font-medium ;
 "
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              magnam similique eum assumend a magni, quam dignissimos sit
              tempora ipsum obcaecati repellendus est voluptas iure hic eligendi
              excepturi, nihil iste debitis perspiciatis, corrupti optio soluta
              fugit culpa. Consequatur un de, ipsum architecto natus repellendus
              tenetur vitae ut modi dolorem quam soluta cupiditate!
              <br />
              <p className="mt-3">
                em ipsum, dolor sit amet consectetur adipisicing elit. Harum
                magnam similique eum assumend a magni, quam dignissimos sit
                tempora ipsum obcaecati repellendus est voluptas iure hic
                eligendi excepturi, nihil iste debitis p
              </p>
            </p>
          </div>
        )}
      </div>
      <Image
        src={dropdown}
        className={`cursor-pointer absolute left-[343px] bottom-[18px] rounded-xl transform ${
          isExpanded ? "rotate-180 mb-[268px]" : ""
        }`}
        onClick={() => toggleExpand(index)}
      />
    </div>
  );
}

export default Faq;
