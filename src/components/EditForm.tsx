import { useState } from "react";

interface OptionProps {
    option: {
      id: number;
      text: string;
      isCompleted: boolean;
      isEditing: boolean;
    },
    editOption: (id: number, text: string) => void,
  }

export default function EditForm({option,editOption}: OptionProps) {
  const [content, setContent] = useState<string>(option.text);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //addOption(content);
    //setContent("");
    editOption(option.id,content);
}
  return (
    <form className="h-[40px] w-full my-6 border border-blue-800 flex " onSubmit={handleSubmit}>
        <input type="text" placeholder="請輸入功能" value={content} onChange={(e) => {setContent(e.target.value)}}
        className="outline-none border-none bg-none text-black w-full h-full"  />
        <button className="w-[50px] h-full bg-blue-700 hover:bg-blue-400" type="submit">完成</button>
    </form>
  );
}