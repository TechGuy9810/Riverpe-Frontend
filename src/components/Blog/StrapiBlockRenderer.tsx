import React from 'react';

type TextChild = {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
};

type LinkChild = {
  type: 'link';
  url: string;
  children: TextChild[];
};

type BlockChild = TextChild | LinkChild;

type Block = {
  type: 'paragraph' | 'heading' | 'list' | 'quote' | 'image' | 'code';
  level?: number;
  format?: 'ordered' | 'unordered';
  children?: BlockChild[];
  url?: string;
  alternativeText?: string;
};

const renderText = (child: TextChild, index: number) => {
  let element = <React.Fragment key={index}>{child.text}</React.Fragment>;

  if (child.bold) element = <strong key={index}>{element}</strong>;
  if (child.italic) element = <em key={index}>{element}</em>;
  if (child.underline) element = <u key={index}>{element}</u>;
  if (child.strikethrough) element = <s key={index}>{element}</s>;
  if (child.code) element = <code key={index} className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5">{element}</code>;

  return element;
};

const renderChildren = (children: BlockChild[] = []) => {
  return children.map((child, index) => {
    if (child.type === 'link') {
      return (
        <a key={index} href={child.url} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          {child.children?.map((c, i) => renderText(c as TextChild, i))}
        </a>
      );
    }
    return renderText(child as TextChild, index);
  });
};

export const StrapiBlockRenderer = ({ blocks }: { blocks: Block[] }) => {
  if (!blocks || !Array.isArray(blocks)) return null;

  return (
    <div className="strapi-content">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index} className="text-body-color mb-8 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                {renderChildren(block.children)}
              </p>
            );
          case 'heading':
            const HeadingTag = `h${block.level || 2}` as keyof React.JSX.IntrinsicElements;
            let className = "font-xl mb-6 mt-8 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white";
            if (block.level === 1) className = "mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white";
            return (
              <HeadingTag key={index} className={className}>
                {renderChildren(block.children)}
              </HeadingTag>
            );
          case 'list':
            const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
            const listClass = block.format === 'ordered' ? 'list-decimal list-inside text-body-color mb-10' : 'list-disc list-inside text-body-color mb-10';
            return (
              <ListTag key={index} className={listClass}>
                {block.children?.map((listItem: any, i) => (
                  <li key={i} className="mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                    {renderChildren(listItem.children)}
                  </li>
                ))}
              </ListTag>
            );
          case 'quote':
            return (
              <div key={index} className="bg-primary/10 relative z-10 mb-10 overflow-hidden rounded-md p-8 md:p-9 lg:p-8 xl:p-9">
                <p className="text-body-color text-center text-base font-medium italic">
                  {renderChildren(block.children)}
                </p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
