
export default function RecentTicket() {

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Resolved":
        return "text-green-700";
      case "Open":
        return "text-yellow-700";
      case "In Progress":
        return "text-blue-500";
      default:
        return "text-red-700";
    }
  };


  return (
    <section className="py-5 px-2 rounded-md sm:px-5">
      <div className="space-y-7">
        <div className="flex">
          <h2 className="font-semibold">Recent Tickets</h2>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-300">
          <table className="table-auto w-full border-collapse ">
            <thead>
              <tr className="bg-gray-600 text-[14px]">
                <th className="border border-gray-300 text-left px-4 py-2 hidden lg:table-cell">
                  Ticket
                </th>
                <th className="border border-gray-300 text-left px-4 py-2 hidden lg:table-cell">
                  Subject
                </th>
                <th className="border border-gray-300 text-left px-4 py-2 hidden lg:table-cell">
                  Status
                </th>
                <th className="border border-gray-300 text-left px-4 py-2">
                  Last Updated
                </th>
                <th className="border border-gray-300 text-left px-4 py-2 hidden md:table-cell">
                  Action
                </th>
                
              </tr>
            </thead>
            <tbody>
                <tr className="text-[14px]">
                    <td className="px-4 border border-gray-200 py-2 hidden lg:table-cell font-semibold">
                    #789Y988
                    </td>
                    <td className="px-4 border border-gray-200 py-2 hidden lg:table-cell ">
                    Withdrawal Failed
                    </td>
                    <td className="px-4 py-2 flex items-center justify-between gap-2">
                    <span className={` ${getStatusClass(status)}`}>
                        Open
                    </span>
                    </td>
                    <td className="px-4 border border-gray-200 py-2 text-center">
                    30/06/2025
                    </td>
                    <td className="px-4 border border-gray-200 py-2 hidden md:table-cell text-center">
                    Edit
                    </td>                    
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
