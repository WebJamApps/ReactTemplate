import commonUtils from 'src/lib/commonUtils';

export const Page1 = (): JSX.Element => {
  commonUtils.setTitleAndScroll('Page 1', window.screen.width);
  return (
    <div>
      <h1>Page 1</h1>
      <div>
        <p>Some page one content here.</p>
      </div>
    </div>
  );
};
