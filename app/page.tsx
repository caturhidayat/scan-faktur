'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { validateUrl } from "./action";

const initialState = {
  success: false,
  message: '',
  inputs: {
    urlValidate: ''
  }
}

export default function Home() {

  const [state, action, isPending] = useActionState(validateUrl, initialState)

  return (
    <div className="grid grid-cols-1 gap-4 lg:gap-8">
      <div className="">
        <div className='my-5'>
          <form action={action}>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='urlValidate'>
                URL
              </Label>
              <div className="flex gap-2">
                <Input
                  type='text'
                  name='urlValidate'
                  id='urlValidate'
                  defaultValue={state.inputs?.urlValidate}

                />
                
                <Button type='submit' disabled={isPending}>
                  Validate
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


// export default function Page() {
//   // table state type is like a TableFakturProps
//   const [table, setTable] = useState<TableFakturProps[]>([]);

//   // Handle Export using xlsx library
//   const handleExport = () => {
//       const ws = xlsx.utils.json_to_sheet(table);
//       const wb = xlsx.utils.book_new();
//       xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
//       xlsx.writeFile(wb, "faktur.xlsx");
//   };

//   return (

//   );
// }