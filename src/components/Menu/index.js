import classNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { changeActiveIndex } from '../../store/modules/takeaway'
import './index.scss'

const Menu = () => {
  const dispatch = useDispatch()
  // const changeIndex = (index) => {
  //   setActiveIndex(index)
  // }
  const { foodList } = useSelector(state => state.food)
  const activeIndex = useSelector(state => state.food.activeIndex)
  const menuList = foodList.map(item => ({ tag: item.tag, name: item.name }))
  // const [activeIndex, setActiveIndex] = useState(0)

  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menuList.map((item, index) => {
        return (
          <div
            key={item.tag}
            //方案一：useState存储activeIndex
            // onClick={() => changeIndex(index)}
            // 方案二：redux存储activeIndex
            onClick={() => dispatch(changeActiveIndex(index))}
            className={classNames(
              'list-menu-item',
              // item.tag === 当前tag时，添加active类名
              index === activeIndex && 'active'
            )}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
