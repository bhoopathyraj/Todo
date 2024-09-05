import userIcon from './assets/user.svg'
import FlagIcon from './assets/flag.svg'
import HomeIcon from './assets/home.svg'
import SunIcon from "./assets/sun.svg"
import StarIcon from "./assets/star.svg"
import CalendarIcon from "./assets/todo-calender.svg"
import IdeaIcon from './assets/bulb.svg'
import SortIcon from './assets/upanddown.svg'
import TodoIcon from './assets/calender.svg'
import GridIcon from './assets/grid.svg'
import ListIcon from './assets/list.svg'
import DueDateIcon from './assets/calender.svg'
import NotificationIcon from './assets/notification.svg'
import RepeatIcon from './assets/repeat.svg'
import AddFileIcon from './assets/addfile.svg'
import CategoryIcon from './assets/tags.svg'

export const navbarContent = [{
  value: "My Day",
  Image: SunIcon

},
{
  value: "Important",
  Image: StarIcon

},
{
  value: "Planned",
  Image: CalendarIcon
},
{
  value: "Assigned to me",
  Image: userIcon
},
{
  value: "Flagged email",
  Image: FlagIcon

},
{
  value: "Task",
  Image: HomeIcon

}

]

export const displayOptions = [
  {
    value: 'Sort',
    image: SortIcon
  },
  {
    value: 'Group',
    image: TodoIcon
  },
  {
    value: 'Suggestions',
    image: IdeaIcon
  }
]

export const displayType = [
  {
    value: 'Grid',
    image: GridIcon
  },
  {
    value: 'List',
    image: ListIcon
  }
]

export const DisplayForModifyTodo = [
  {
    value: 'Added to My Day',
    image: SunIcon,
  },
  {
    value:'Remind to me',
    image: NotificationIcon
  },
  {
    value:'Add due date',
    image: DueDateIcon
  },
  {
    value: "repeat",
    image: RepeatIcon
  },
  {
    value:"Pick a category",
    image: CategoryIcon,
  },{
    value:"Add a file",
    image:AddFileIcon
  }
]

