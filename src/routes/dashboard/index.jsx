import React, { useState, useEffect } from 'react'
import { Header, Card, Report } from 'components'
import { useTheme } from 'context'
import styles from './styles.module.css'
import {
  logo,
  menuIcon,
  collapsibleIcon,
  trendIcon,
  userIcon,
  boxIcon,
  discountIcon,
  infoIcon,
  arrowRight,
  settings,
  logout,
  lighttheme,
  darktheme,
  arrowDownIcon,
  card1img,
  greenWave,
  greenSvg,
  card2img,
  redWave,
  redSvg,
  card3img,
  card4img,
  docIcon,
} from 'assets'
import orderImg1 from 'assets/images/orderImg1.png'
import orderImg2 from 'assets/images/orderImg2.png'
import orderImg3 from 'assets/images/orderImg3.png'
import orderImg4 from 'assets/images/orderImg4.png'
import orderImg5 from 'assets/images/orderImg5.png'
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
} from 'recharts'

const navItems = [
  {
    id: 1,
    name: 'menu',
    title: 'menu',
    icon: menuIcon,
    collapsible: collapsibleIcon,
  },
  {
    id: 2,
    name: 'trends',
    title: 'trends',
    icon: trendIcon,
  },
  {
    id: 3,
    name: 'user',
    title: 'user',
    icon: userIcon,
  },
  {
    id: 4,
    name: 'box',
    title: 'box',
    icon: boxIcon,
  },
  {
    id: 5,
    name: 'discount',
    title: 'discount',
    icon: discountIcon,
  },
  {
    id: 6,
    name: 'info',
    title: 'info',
    icon: infoIcon,
  },
]

const otherItems = [
  {
    id: 1,
    name: 'arrow',
    title: 'arrow',
    icon: arrowRight,
  },
  {
    id: 2,
    name: 'settings',
    title: 'settings',
    icon: settings,
  },
  {
    id: 3,
    name: 'logout',
    title: 'logout',
    icon: logout,
  },
]

const cards = [
  {
    id: 1,
    cardImg: card1img,
    wave: greenWave,
    title: 'Total Order',
    amount: 350,
    smallImg: greenSvg,
    percent: '23,5%',
    period: 'vs. previous month',
  },
  {
    id: 2,
    cardImg: card2img,
    wave: redWave,
    title: 'Total Refund',
    amount: 270,
    smallImg: redSvg,
    percent: '23,5%',
    period: 'vs. previous month',
    style: true,
  },
  {
    id: 3,
    cardImg: card3img,
    wave: redWave,
    title: 'Average Sales',
    amount: 1567,
    smallImg: greenSvg,
    percent: '23,5%',
    period: 'vs. previous month',
    style: true,
  },
  {
    id: 4,
    cardImg: card4img,
    wave: greenWave,
    title: 'Total Income',
    amount: '$350.000',
    smallImg: greenSvg,
    percent: '23,5%',
    period: 'vs. previous month',
  },
]

const orders = [
  {
    id: 1,
    orderImage: orderImg1,
    name: 'Marcus Bergson',
    orderDate: 'Nov 15, 2023',
    amount: '$80,000',
    status: 'Paid',
    invoice: 'View',
  },
  {
    id: 2,
    orderImage: orderImg2,
    name: 'Jaydon Vaccaro',
    orderDate: 'Nov 15, 2023',
    amount: '$150,000',
    status: 'Refund',
    invoice: 'View',
  },
  {
    id: 3,
    orderImage: orderImg3,
    name: 'Corey Schleifer',
    orderDate: 'Nov 14, 2023',
    amount: '$87,000',
    status: 'Paid',
    invoice: 'View',
  },
  {
    id: 4,
    orderImage: orderImg4,
    name: 'Cooper Press',
    orderDate: 'Nov 14, 2023',
    amount: '$100,000',
    status: 'Refund',
    invoice: 'View',
  },
  {
    id: 5,
    orderImage: orderImg5,
    name: 'Phillip Lubin',
    orderDate: 'Nov 13, 2023',
    amount: '$78,000',
    status: 'Paid',
    invoice: 'View',
  },
]

const reportItems = [
  {
    id: 1,
    name: 'Book Bazaar',
    amount: '$2,500,000',
    percent: '+15%',
    progress: '',
    style: 'purplecolor',
  },
  {
    id: 2,
    name: 'Artisan Aisle',
    amount: '$1,800,000',
    percent: '+10%',
    progress: '',
    style: 'bluecolor',
  },
  {
    id: 3,
    name: 'Toy Troop',
    amount: '$1,200,000',
    percent: '+8%',
    progress: '',
    style: 'orangecolor',
  },
  {
    id: 4,
    name: 'XStore',
    amount: '',
    percent: '',
    progress: '',
  },
]

const data = [
  {
    name: 'Jan',
    amount: 7.5,
    uv: 7.5,
  },
  {
    name: 'Feb',
    amount: 18,
    uv: 18,
  },
  {
    name: 'Mar',
    amount: 4,
    uv: 4,
  },
  {
    name: 'Apr',
    amount: 27,
    uv: 27,
  },
  {
    name: 'May',
    amount: 8,
    uv: 8,
  },
  {
    name: 'Jun',
    amount: 45,
    uv: 45,
  },
  {
    name: 'Jul',
    amount: 9,
    uv: 9,
  },
  {
    name: 'Aug',
    amount: 20,
    uv: 20,
  },
  {
    name: 'Sep',
    amount: 34,
    uv: 34,
  },
  {
    name: 'Oct',
    amount: 5,
    uv: 5,
  },
  {
    name: 'Nov',
    amount: 30,
    uv: 30,
  },
  {
    name: 'Dec',
    amount: 27,
    uv: 27,
  },
]

const Dashboard = () => {
  const [isSidebarCollapse, setIsSidebarCollapse] = useState(false)
  const [dropdown, setDropdown] = useState('weekly')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const drpOptions = [
    {
      id: 1,
      title: 'daily',
      value: 'daily',
    },
    {
      id: 2,
      title: 'weekly',
      value: 'weekly',
    },
    {
      id: 3,
      title: 'yearly',
      value: 'yearly',
    },
  ]

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload

      const tooltipStyle = {
        filter: 'drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.10))',
        padding: '5px 15px 11.98px 15px',
        color: '#FFF',
        fontFamily: 'Inter',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineheight: 'normal',
        background: '#090C2C',
        borderRadius: '1000px',
        textalign: 'center',
        top: '-3.02px',
        right: '-15px',
      }

      const arrowStyle = {
        position: 'absolute',
        content: '',
        width: 0,
        height: 0,
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderTop: '8px solid #090C2C',
        bottom: '-8px',
        left: '50%',
        transform: 'translateX(-50%)',
      }

      return (
        <div
          className='custom_tooltip'
          style={{ ...tooltipStyle, top: -3.02, left: 5 }}
        >
          <div style={arrowStyle}></div>
          <p>{`$${data.amount}`}</p>
        </div>
      )
    }

    return null
  }

  const CustomXAxisTick = (props) => {
    const { x, y, payload } = props

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor='end'
          fill='#525252'
          fontFamily='Plus Jakarta Sans'
          fontSize={14}
          fontStyle='normal'
          fontWeight={600}
          lineheight={22}
          textalign='right'
        >
          {payload.value}
        </text>
      </g>
    )
  }

  const CustomYAxisTick = (props) => {
    const { x, y, payload } = props

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor='end'
          fill='#525252'
          fontFamily='Plus Jakarta Sans'
          fontSize={12}
          fontStyle='normal'
          fontWeight={600}
          lineHeight={16}
          textAlign='center'
        >
          {payload.value}
        </text>
      </g>
    )
  }

  const handleDropdown = (value) => {
    setDropdown(value)
    closeDropdown()
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  const toggleSidebar = () => {
    setIsSidebarCollapse((prev) => !prev)
  }

  const styleMappings = {
    purplecolor: styles.purplecolor,
    bluecolor: styles.bluecolor,
    orangecolor: styles.orangecolor,
  }

  const barColor = 'rgba(52, 202, 165, 0.10)'

  return (
    <div className={styles.container}>
      <nav className={isSidebarCollapse ? styles.collapsed : styles.sidebar}>
        <div
          className={
            isSidebarCollapse ? styles.collapsednavwrapper : styles.navwrapper
          }
        >
          <div className={styles.mainmenu}>
            <span
              className={
                isSidebarCollapse ? styles.collapsedlogo : 'styles.topnav'
              }
            >
              {logo}
            </span>
            <div
              className={
                isSidebarCollapse ? styles.collapsedtopnav : styles.topnav
              }
            >
              {navItems.map(({ id, name, icon, collapsible }) => {
                return (
                  <div
                    key={id}
                    className={
                      isSidebarCollapse
                        ? styles.collapsedtopnavinner
                        : styles.topnavinner
                    }
                  >
                    {collapsible ? (
                      <div
                        onClick={toggleSidebar}
                        className={
                          isSidebarCollapse
                            ? `${styles.collapsedtopnavinnermenu} ${styles.tooltip}`
                            : `${styles.topnavinnermenu} ${styles.tooltip}`
                        }
                      >
                        <div
                          className={
                            isSidebarCollapse
                              ? styles.collapsedlinkwithicon
                              : `${styles.linkwithicon} ${styles.linkwithiconX}`
                          }
                        >
                          {icon}
                          <span
                            className={
                              isSidebarCollapse
                                ? styles.linkname
                                : `${styles.link} ${styles.hide}`
                            }
                          >
                            {name}
                          </span>
                        </div>
                        <span>{collapsible}</span>
                        <span className={styles.tooltip__content}>{name}</span>
                      </div>
                    ) : (
                      <div
                        className={`${styles.topnavinnermenu} ${styles.tooltip}`}
                      >
                        <div className={styles.linkwithicon}>
                          {icon}
                          <span
                            className={
                              isSidebarCollapse
                                ? styles.link
                                : `${styles.link} ${styles.hide}`
                            }
                          >
                            {name}
                          </span>
                        </div>
                        <span className={styles.tooltip__content}>{name}</span>
                      </div>
                    )}
                  </div>
                )
              })}
              <div
                className={
                  isSidebarCollapse ? styles.collapsedthemes : styles.themes
                }
              >
                <div className={styles.themeswrapper}>
                  <div className={styles.themeswrapperinner}>
                    <div className={styles.themeButton}>
                      <span onClick={toggleTheme}>
                        {theme === 'light' ? (
                          <span className={styles.lightbkwrapper}>
                            {lighttheme}
                          </span>
                        ) : (
                          darktheme
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              isSidebarCollapse ? styles.collapsedothermenu : styles.othermenu
            }
          >
            {otherItems.map(({ id, name, icon }) => (
              <div
                key={id}
                className={
                  isSidebarCollapse
                    ? `${styles.collapsedbottomnavinnermenu} ${styles.tooltip}`
                    : `${styles.topnavinnermenu} ${styles.tooltip}`
                }
              >
                <div
                  className={
                    isSidebarCollapse
                      ? styles.collapsedbottomnavinner
                      : styles.topnavinner
                  }
                >
                  <span>{icon}</span>
                  <span
                    className={
                      isSidebarCollapse
                        ? styles.link
                        : `${styles.link} ${styles.hide}`
                    }
                  >
                    {name}
                  </span>
                  <span className={styles.tooltip__content}>{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
      <main className={styles.main}>
        <Header />
        <div className={styles.recenttable_cards}>
          <div className={styles.recenttable_cards_wrapper}>
            <div className={styles.recenttable}>
              <div className={styles.tabletitle}>
                <p className={styles.tabletitlename}>Sales Trends</p>
                <div className={styles.sortby}>
                  <p className={styles.sortbytitle}>Sort by:</p>
                  <div className={styles.dropdown}>
                    <div
                      className={styles.customDropdown}
                      onClick={toggleDropdown}
                    >
                      <p className={styles.customDropdownName}>{dropdown}</p>
                      <span className={styles.arrowSvg}>{arrowDownIcon}</span>
                    </div>
                    {isDropdownOpen && (
                      <div className={styles.dropdownOptions}>
                        {drpOptions.map(({ title, value }) => (
                          <div
                            key={value}
                            onClick={() => handleDropdown(value)}
                          >
                            {title}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.table}>
                <ResponsiveContainer width='100%' height={300}>
                  <BarChart
                    data={data}
                    width={150}
                    height={10}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis
                      dataKey='name'
                      tick={<CustomXAxisTick />}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      tick={<CustomYAxisTick />}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      content={<CustomTooltip />}
                      wrapperStyle={{ backgroundColor: '#090C2C' }}
                      position={{ y: 15.02 }}
                      marginRight={20}
                      cursor={false}
                    />

                    <Bar
                      dataKey='uv'
                      radius={[20, 20, 0, 0]}
                      barSize={30}
                      fill={barColor}
                      activeBar={
                        <Rectangle
                          fill={'rgba(52, 202, 165, 1), rgba(52, 202, 165, 0)'}
                        />
                      }
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className={styles.cards}>
              {cards.map(
                ({
                  id,
                  cardImg,
                  wave,
                  title,
                  amount,
                  smallImg,
                  percent,
                  period,
                  style,
                }) => {
                  return (
                    <Card key={id}>
                      <div className={styles.cardtop}>
                        <Card.Icon>{cardImg}</Card.Icon>
                        <Card.GraphLine>{wave}</Card.GraphLine>
                      </div>
                      <div className={styles.cardmiddle}>
                        <Card.Title>{title}</Card.Title>
                        <Card.Amount>{amount}</Card.Amount>
                      </div>
                      <div className={styles.cardbottom}>
                        <div
                          className={
                            style ? styles.redstyle : styles.cardbottomIcon
                          }
                        >
                          {smallImg}
                          <Card.Percentage>{percent}</Card.Percentage>
                        </div>
                        <Card.Period>{period}</Card.Period>
                      </div>
                    </Card>
                  )
                }
              )}
            </div>
          </div>
        </div>

        <div className={styles.lastorders_topplatform}>
          <div className={styles.lastorders_topplatform_wrapper}>
            <div className={styles.lastorders}>
              <div className={styles.lastordertop}>
                <div className={styles.lastordersheading}>
                  <p>Last Orders</p>
                  <p>See All</p>
                </div>
                <div className={styles.lastordertableeadings}>
                  <span>Name</span>
                  <span>Date</span>
                  <span>Amount</span>
                  <span>Status</span>
                  <span>Invoice</span>
                </div>
              </div>
              <div className={styles.allorders}>
                {orders.map(
                  ({
                    id,
                    orderImage,
                    name,
                    orderDate,
                    amount,
                    status,
                    invoice,
                  }) => (
                    <div key={id} className={styles.singleorder}>
                      <div className={styles.singleorderImg}>
                        <img src={orderImage} alt={name} />

                        <span>{name}</span>
                      </div>
                      <span className={styles.orderDate}>{orderDate}</span>
                      <span className={styles.orderAmount}>{amount}</span>
                      <span
                        className={`${styles.orderStatus} ${
                          status === 'Paid'
                            ? styles.paidOrder
                            : styles.refundOrder
                        }`}
                      >
                        {status}
                      </span>
                      <div className={styles.orderInvoice}>
                        {docIcon}
                        <span>{invoice}</span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className={styles.salesreport}>
              <div className={styles.salesreporttitle}>
                <p>Top Platform</p>
                <p>See all</p>
              </div>
              <div className={styles.reportlists}>
                {reportItems.map(
                  ({ id, name, amount, percent, progress, style }) => (
                    <Report key={id}>
                      <Report.Name>{name}</Report.Name>
                      <Report.Progress
                        className={`${styles.progressbar} ${
                          styleMappings[style] || ''
                        }`}
                      >
                        {progress}
                      </Report.Progress>
                      <div className={styles.reportamountwrapper}>
                        <Report.Amount>{amount}</Report.Amount>
                        <p>{percent}</p>
                      </div>
                    </Report>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
