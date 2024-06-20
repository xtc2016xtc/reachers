import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';
import { Mac } from '.';
import {Store} from '.';
import { IPhone } from '.';
import { Support } from '.';
const Navbar = () => {
  return (
    <Router>
      <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex w-full scroll-max-width'>
          <img src={appleImg} alt="苹果图标" width={14} height={18} />

          <div className='flex flex-1 justify-center max-sm:hidden'>
            {navLists.map((nav, index) => (
              <Link
                key={index}
                to={`/${nav.toLowerCase()}`} // 将导航名转换为小写并作为路径
                className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'
              >
                {nav}
              </Link>
            ))}
          </div>

          <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
            <img src={searchImg} alt="搜索icon" width={18} height={18} />
            <img src={bagImg} alt="购物车icon" width={18} height={18} />
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Store />} /> {/* 默认主页 */}
          {navLists.map((nav, index) => (
            <Route
              key={index}
              path={`/${nav.toLowerCase()}`} // 确保路径与链接匹配
              element={/* 导航项对应的组件 */ <NavRouter navItem={nav} />}
            />
          ))}
        </Routes>
      </main>
    </Router>
  );
};

// 需要为每个导航项创建对应的组件，例如：
// eslint-disable-next-line react/prop-types
const NavRouter = ({ navItem }) => {
  if (navItem === 'Mac') {
    return <Mac />;
  }
  if (navItem === 'Store') {
    return <Store />
  }
  if (navItem === 'iPhone' ){
    return <IPhone />
  }
  if (navItem === 'Support'){
    return <Support />
  }
  // 更多导航项...
  
  // 默认情况下，如果找不到匹配的组件，则显示空内容或错误消息
  return null;
};

export default Navbar;