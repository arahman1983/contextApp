import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import APPHeader from './index';


afterEach(cleanup);

test('renders User Name', () => {
  render(<APPHeader />);
  const userName = screen.getByTitle('userName');
  expect(userName).toBeInTheDocument();
});


test('toggle Collapse', ()=>{
  render (<APPHeader/>);
  const button = screen.queryByTitle('buttonCollapse');
  expect(button)?.toBeTruthy();
  const icon = button?.getElementsByTagName('FiAlignJustify')
  expect(icon)?.toBeTruthy();
  button && fireEvent.click(button)
  const icon2 = button?.getElementsByTagName('FaRegTimesCircle')
  expect(icon2)?.toBeTruthy();
})