import Icon from 'components/Icons';
import cx from 'classnames';
import React, { useState } from 'react';

type DropDownBoxProps = {
  iconName: string;
  title: string;
  value: React.ReactNode;
  children: React.ReactNode;
};

const DropDownBox = ({ iconName, title, value, children }: DropDownBoxProps) => {
  const [isShowToolTip, setShowToolTip] = useState(false);

  return (
    <div className="relative h-full bg-white rounded-lg">
      <div
        className="flex items-center justify-between gap-6 px-5 py-6 cursor-pointer"
        onClick={() => setShowToolTip(!isShowToolTip)}
      >
        <div className="inline-flex items-center gap-3">
          <Icon type={iconName} />
          <h3 className="text-xl font-medium">{title}</h3>
        </div>

        <div className="text-right">{value}</div>
        {/* <h4 className="text-xl font-medium">{value}</h4> */}
      </div>

      <div className="absolute flex justify-center -translate-x-1/2 left-1/2 bottom-2">
        <Icon type="chevron-down" />
      </div>

      <div
        className={cx('absolute top-[110%] left-0 w-full z-[100] bg-white p-4', {
          'opacity-0': !isShowToolTip,
          'opacity-1': isShowToolTip,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default DropDownBox;
