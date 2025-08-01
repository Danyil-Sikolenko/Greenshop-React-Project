import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space } from 'antd';
import styles from "./styles-home/home.module.css";

function ProductControls({ activeStatus, setActiveStatus }) {

    const items = [
        { label: '1st menu item', key: '1', },
        { label: '2nd menu item', key: '2', },
    ];
    const handleMenuClick = e => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <>
            <div className={styles.sorting_container}>
                <div className={styles.sort_product_by_status}>
                    <ul className={styles.sort_product_by_status_list}>
                        <li className={styles.sort_product_by_status_item}>
                            <button
                                className={`${styles.sort_product_by_status_btn} ${activeStatus === "all" ? styles.active : ""}`}
                                onClick={() => {
                                    setActiveStatus(prev => prev === "all" ? null : "all")
                                }
                                }
                            >
                                All Plants
                            </button>
                        </li>

                        <li className={styles.sort_product_by_status_item}>
                            <button
                                className={`${styles.sort_product_by_status_btn} ${activeStatus === "new" ? styles.active : ""}`}
                                onClick={() => { setActiveStatus(prev => prev === "new" ? null : "new") }
                                }
                            >
                                New Arrivals
                            </button>

                        </li>

                        <li className={styles.sort_product_by_status_item}>
                            <button
                                className={`${styles.sort_product_by_status_btn} ${activeStatus === "sold" ? styles.active : ""}`}
                                onClick={() => {
                                     setActiveStatus(prev => prev === "sold" ? null : "sold") }
                                }
                            >
                                Sale
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={styles.short_container}>
                    <Dropdown menu={menuProps}>
                        <Button className={styles.short_dropdown_btn}>
                            <Space>
                                Default sorting
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </div>
            </div>
        </>
    )
}

export default ProductControls