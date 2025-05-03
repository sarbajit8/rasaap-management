import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, CardFooter } from '../../../components/ui/card';
import { useToast } from '../../../hooks/use-toast';
import { getTerminationsByEmployeeId, deleteTerminate } from '../../../store/common/termination-slice';

const Terminate = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const { user: employee } = useSelector(state => state.auth);
  const { terminateList } = useSelector(state => state.terminate);

  const [searchTitle, setSearchTitle] = useState('');
  const [searchYear, setSearchYear] = useState('');
  const [searchMonth, setSearchMonth] = useState('');

  useEffect(() => {
    if (employee?.id) {
      dispatch(getTerminationsByEmployeeId(employee.id));
    }
  }, [dispatch, employee?.id]);

  // Filter terminations based on search criteria
  const filteredTerminations = terminateList.filter(termination => {
    const terminationDate = new Date(termination.date);
    const year = terminationDate.getFullYear();
    const month = terminationDate.getMonth() + 1;

    const matchesTitle = termination.title.toLowerCase().includes(searchTitle.toLowerCase());
    const matchesYear = searchYear ? year.toString() === searchYear : true;
    const matchesMonth = searchMonth ? month.toString() === searchMonth : true;

    return matchesTitle && matchesYear && matchesMonth;
  });

  // Handle deleting termination
  const handleDelete = (id) => {
    dispatch(deleteTerminate(id)).then((res) => {
      if (res?.payload?.success) {
        dispatch(getTerminationsByEmployeeId(employee.id));  // Refetch updated list
        toast({ title: 'Termination deleted successfully' });
      }
    });
  };

  return (
    <Fragment>
      <div className='mb-5 flex justify-between'>
        {/* <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
          <input
            type="text"
            placeholder="Search by title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="border rounded p-2 w-full md:w-auto"
          />
          <input
            type="number"
            placeholder="Search by year"
            value={searchYear}
            onChange={(e) => setSearchYear(e.target.value)}
            className="border rounded p-2 w-full md:w-auto"
          />
          <select
            value={searchMonth}
            onChange={(e) => setSearchMonth(e.target.value)}
            className="border rounded p-2 w-full md:w-auto"
          >
            <option value="">Search by month</option>
            {[...Array(12)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {new Date(0, index).toLocaleString('default', { month: 'long' })}
              </option>
            ))}
          </select>
        </div> */}
      </div>

      <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {filteredTerminations.length > 0 ? (
          filteredTerminations.map((termination) => (
            <Card key={termination._id} className='w-full max-w-sm mx-auto shadow-md border rounded-xl'>
              <CardContent className='py-4 px-5'>
                <h2 className='text-lg font-semibold mb-2 break-words max-w-[200px]'>
                  {termination.title}
                </h2>
                <p className='text-sm text-gray-700 mb-3 break-words max-w-[300px] whitespace-pre-line'>
                  {termination.content}
                </p>
                <p className='text-xs text-muted-foreground'>
                  {termination.date?.split('T')[0]}
                </p>
              </CardContent>
              <CardFooter className='flex justify-end px-5 pb-4'>
             
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>No terminations found.</p>
        )}
      </div>
    </Fragment>
  );
};

export default Terminate;
