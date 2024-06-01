import React from 'react'

export default function SideBar() {
  return (
      <div id="sidebar" className="col-2">
          <div className="sidebar-header">
              <div className="sidebar-logo">
                  <a href="#">
                      <img src="/images/logo/Logo.png" alt="Logo" />
                  </a>
              </div>

              <div className="sidebar-menu-btn">
                  <i className="fas fa-bars"></i>
              </div>
          </div>
          <div className="sidebar-menu">
              <ul>
                  <li className="active-menu">
                      <a href="#">
                          <span>صفحه اصلی</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span>دوره ها</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span>منو ها</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span>مقاله ها</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span>کاربران</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span>کدهای تخفیف</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span>دسته‌بندی‌ها</span>
                      </a>
                  </li>
              </ul>
          </div>
      </div>
  )
}
