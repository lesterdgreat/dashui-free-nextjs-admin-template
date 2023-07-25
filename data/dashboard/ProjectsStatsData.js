import {
   FiletypePdf,
   PersonCheck,
	Briefcase,
    ListTask,
    People,
    Bullseye,
    PersonCheckFill,
    BookFill,
    FilePdfFill,
    FileBarGraphFill
} from 'react-bootstrap-icons';

export const ProjectsStats = [
    {
       id:1,
       title : "Sorting",
       value : 18,
       icon: <FilePdfFill size={18}/>,
       statInfo: '<span className="text-dark me-2">2 </span> Completed ' 
    },
    {
        id:2,
        title : "Data Entry",
        value : 132,
        icon: <BookFill size={18}/>,
        statInfo: '<span className="text-dark me-2">28</span> Completed' 
     },
     {
        id:3,
        title : "Verification",
        value : 12,
        icon: <PersonCheckFill size={18}/>,
        statInfo: '<span className="text-dark me-2">1</span> Completed' 
     },
     {
        id:4,
        title : "Assessment",
        value : '21',
        icon: <FileBarGraphFill size={18}/>,
        statInfo: '<span className="text-dark me-2">5</span> Completed' 
     }
];
export default ProjectsStats;
