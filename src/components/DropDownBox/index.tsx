import Icon from 'components/Icons';
import cx from 'classnames';
import React, { useState } from 'react';

type DropDownBoxProps = {
  iconName: string;
  title: string;
  value: string;
  children: React.ReactNode;
};

const DropDownBox = ({ iconName, title, value, children }: DropDownBoxProps) => {
  const [isShowToolTip, setShowToolTip] = useState(false);

  return (
    <div className="relative bg-white rounded-lg">
      <div
        className="flex items-center justify-between px-5 pt-6 pb-4 cursor-pointer"
        onClick={() => setShowToolTip(!isShowToolTip)}
      >
        <div className="inline-flex items-center gap-3">
          <Icon type={iconName} />
          <h3 className="text-xl font-medium">{title}</h3>
        </div>

        <h4 className="text-xl font-medium">{value}</h4>
      </div>

      <div className="flex justify-center pb-2">
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
