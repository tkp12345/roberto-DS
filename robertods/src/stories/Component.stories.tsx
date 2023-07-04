import  {Squares, SquareType} from "./square";

export default {
    title: 'Example/Squares',
    component: Squares,
    argTypes: {
        width: { control: 'number' },
        height: { control: 'number' },
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: SquareType) =>  <Squares {...args}/>;

export const Default = Template.bind({})

