import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap';

// Widgets
import Title from '../../widgets/Title';

// Images
import labAboutUs1 from '/assets/images/laboratory/lab-about-us-1.webp'
import labAboutUs2 from '/assets/images/laboratory/lab-about-us-2.webp'
import labUser from '/assets/images/laboratory/lab-user.webp'
import labSignature from '/assets/images/laboratory/lab-signature.webp'

export default function LaboratoryAbout() {
  return (
    <div className="section-padding pb-0">
      <Container>
        <Row className="align-items-center">
          <Col lg="5" className="position-relative pe-lg-5">
              <Image src={labAboutUs1} className="img-fluid mb-sm-5 w-100" alt="laboratory-about-us-1" />
              <Image src={labAboutUs2} className="img-fluid position-absolute bottom-0 end-0 d-sm-block d-none" alt="laboratory-about-us-2" />
          </Col>
          <Col lg="7" className="ps-xl-5 mt-lg-0 mt-5">
            <div className="ps-xl-5">
              <Title subTitle="About Us" rightText="Journey Of Discover The Uncovering " leftText="True Identity" titleDescription="Laboratory is a company that provides software solutions and digital services to
                  businesses, with a focus on innovation and customer satisfaction." />
                <div className="iq-list mt-5">
                  <ul className="iq-list-with-icon list-inline mb-0">
                      <li className="d-flex align-items-center gap-2 mb-3">
                          <span className="text-primary">
                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                  fill="none">
                                  <path
                                      d="M3.43751 11.2499C3.4373 9.92234 3.78659 8.61809 4.45025 7.46828C5.11392 6.31847 6.06857 5.36362 7.21825 4.69974C8.36793 4.03585 9.67212 3.68631 10.9997 3.68626C12.3273 3.68621 13.6315 4.03564 14.7813 4.69944C14.9391 4.78917 15.126 4.81283 15.3012 4.76527C15.4764 4.7177 15.6257 4.60276 15.7165 4.44554C15.8072 4.28832 15.8321 4.10157 15.7857 3.92606C15.7393 3.75054 15.6254 3.60051 15.4688 3.50869C13.7649 2.52499 11.7842 2.13097 9.83358 2.38773C7.883 2.6445 6.07166 3.5377 4.68045 4.92882C3.28924 6.31994 2.39592 8.13123 2.13903 10.0818C1.88214 12.0323 2.27603 14.0132 3.25962 15.717C4.24321 17.4209 5.76154 18.7527 7.57912 19.5057C9.3967 20.2587 11.412 20.391 13.3124 19.882C15.2128 19.373 16.8921 18.2511 18.09 16.6904C19.2878 15.1297 19.9373 13.2173 19.9375 11.2499C19.9375 11.0676 19.8651 10.8927 19.7361 10.7638C19.6072 10.6349 19.4324 10.5624 19.25 10.5624C19.0677 10.5624 18.8928 10.6349 18.7639 10.7638C18.6349 10.8927 18.5625 11.0676 18.5625 11.2499C18.5625 13.2556 17.7658 15.1792 16.3475 16.5974C14.9293 18.0157 13.0057 18.8124 11 18.8124C8.99431 18.8124 7.07076 18.0157 5.65252 16.5974C4.23427 15.1792 3.43751 13.2556 3.43751 11.2499Z"
                                      fill="currentColor"></path>
                                  <path
                                      d="M21.1116 4.86164C21.1756 4.79772 21.2263 4.72184 21.2609 4.63832C21.2955 4.5548 21.3133 4.46529 21.3133 4.37489C21.3133 4.28449 21.2955 4.19498 21.2609 4.11146C21.2263 4.02795 21.1756 3.95206 21.1116 3.88814C21.0477 3.82422 20.9718 3.77352 20.8883 3.73892C20.8048 3.70433 20.7153 3.68652 20.6249 3.68652C20.5345 3.68652 20.445 3.70433 20.3615 3.73892C20.2779 3.77352 20.2021 3.82422 20.1381 3.88814L10.9999 13.0278L7.36164 9.38814C7.29772 9.32422 7.22184 9.27352 7.13832 9.23892C7.0548 9.20433 6.96529 9.18652 6.87489 9.18652C6.78449 9.18652 6.69498 9.20433 6.61146 9.23892C6.52795 9.27352 6.45206 9.32422 6.38814 9.38814C6.32422 9.45206 6.27352 9.52795 6.23892 9.61146C6.20433 9.69498 6.18652 9.78449 6.18652 9.87489C6.18652 9.96529 6.20433 10.0548 6.23892 10.1383C6.27352 10.2218 6.32422 10.2977 6.38814 10.3616L10.5131 14.4866C10.577 14.5507 10.6529 14.6015 10.7364 14.6361C10.8199 14.6708 10.9095 14.6886 10.9999 14.6886C11.0903 14.6886 11.1799 14.6708 11.2634 14.6361C11.3469 14.6015 11.4228 14.5507 11.4866 14.4866L21.1116 4.86164Z"
                                      fill="currentColor"></path>
                              </svg>
                          </span>
                          <span className="text-capitalize text-body">Contrary to popular belief Lorem Ipsum is not simply random text</span>
                      </li>
                      <li className="d-flex align-items-center gap-2 mb-3">
                          <span className="text-primary">
                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                  fill="none">
                                  <path
                                      d="M3.43751 11.2499C3.4373 9.92234 3.78659 8.61809 4.45025 7.46828C5.11392 6.31847 6.06857 5.36362 7.21825 4.69974C8.36793 4.03585 9.67212 3.68631 10.9997 3.68626C12.3273 3.68621 13.6315 4.03564 14.7813 4.69944C14.9391 4.78917 15.126 4.81283 15.3012 4.76527C15.4764 4.7177 15.6257 4.60276 15.7165 4.44554C15.8072 4.28832 15.8321 4.10157 15.7857 3.92606C15.7393 3.75054 15.6254 3.60051 15.4688 3.50869C13.7649 2.52499 11.7842 2.13097 9.83358 2.38773C7.883 2.6445 6.07166 3.5377 4.68045 4.92882C3.28924 6.31994 2.39592 8.13123 2.13903 10.0818C1.88214 12.0323 2.27603 14.0132 3.25962 15.717C4.24321 17.4209 5.76154 18.7527 7.57912 19.5057C9.3967 20.2587 11.412 20.391 13.3124 19.882C15.2128 19.373 16.8921 18.2511 18.09 16.6904C19.2878 15.1297 19.9373 13.2173 19.9375 11.2499C19.9375 11.0676 19.8651 10.8927 19.7361 10.7638C19.6072 10.6349 19.4324 10.5624 19.25 10.5624C19.0677 10.5624 18.8928 10.6349 18.7639 10.7638C18.6349 10.8927 18.5625 11.0676 18.5625 11.2499C18.5625 13.2556 17.7658 15.1792 16.3475 16.5974C14.9293 18.0157 13.0057 18.8124 11 18.8124C8.99431 18.8124 7.07076 18.0157 5.65252 16.5974C4.23427 15.1792 3.43751 13.2556 3.43751 11.2499Z"
                                      fill="currentColor"></path>
                                  <path
                                      d="M21.1116 4.86164C21.1756 4.79772 21.2263 4.72184 21.2609 4.63832C21.2955 4.5548 21.3133 4.46529 21.3133 4.37489C21.3133 4.28449 21.2955 4.19498 21.2609 4.11146C21.2263 4.02795 21.1756 3.95206 21.1116 3.88814C21.0477 3.82422 20.9718 3.77352 20.8883 3.73892C20.8048 3.70433 20.7153 3.68652 20.6249 3.68652C20.5345 3.68652 20.445 3.70433 20.3615 3.73892C20.2779 3.77352 20.2021 3.82422 20.1381 3.88814L10.9999 13.0278L7.36164 9.38814C7.29772 9.32422 7.22184 9.27352 7.13832 9.23892C7.0548 9.20433 6.96529 9.18652 6.87489 9.18652C6.78449 9.18652 6.69498 9.20433 6.61146 9.23892C6.52795 9.27352 6.45206 9.32422 6.38814 9.38814C6.32422 9.45206 6.27352 9.52795 6.23892 9.61146C6.20433 9.69498 6.18652 9.78449 6.18652 9.87489C6.18652 9.96529 6.20433 10.0548 6.23892 10.1383C6.27352 10.2218 6.32422 10.2977 6.38814 10.3616L10.5131 14.4866C10.577 14.5507 10.6529 14.6015 10.7364 14.6361C10.8199 14.6708 10.9095 14.6886 10.9999 14.6886C11.0903 14.6886 11.1799 14.6708 11.2634 14.6361C11.3469 14.6015 11.4228 14.5507 11.4866 14.4866L21.1116 4.86164Z"
                                      fill="currentColor"></path>
                              </svg>
                          </span>
                          <span className="text-capitalize text-body">simply dummy text of the printing and typesetting industry</span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                          <span className="text-primary">
                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                  fill="none">
                                  <path
                                      d="M3.43751 11.2499C3.4373 9.92234 3.78659 8.61809 4.45025 7.46828C5.11392 6.31847 6.06857 5.36362 7.21825 4.69974C8.36793 4.03585 9.67212 3.68631 10.9997 3.68626C12.3273 3.68621 13.6315 4.03564 14.7813 4.69944C14.9391 4.78917 15.126 4.81283 15.3012 4.76527C15.4764 4.7177 15.6257 4.60276 15.7165 4.44554C15.8072 4.28832 15.8321 4.10157 15.7857 3.92606C15.7393 3.75054 15.6254 3.60051 15.4688 3.50869C13.7649 2.52499 11.7842 2.13097 9.83358 2.38773C7.883 2.6445 6.07166 3.5377 4.68045 4.92882C3.28924 6.31994 2.39592 8.13123 2.13903 10.0818C1.88214 12.0323 2.27603 14.0132 3.25962 15.717C4.24321 17.4209 5.76154 18.7527 7.57912 19.5057C9.3967 20.2587 11.412 20.391 13.3124 19.882C15.2128 19.373 16.8921 18.2511 18.09 16.6904C19.2878 15.1297 19.9373 13.2173 19.9375 11.2499C19.9375 11.0676 19.8651 10.8927 19.7361 10.7638C19.6072 10.6349 19.4324 10.5624 19.25 10.5624C19.0677 10.5624 18.8928 10.6349 18.7639 10.7638C18.6349 10.8927 18.5625 11.0676 18.5625 11.2499C18.5625 13.2556 17.7658 15.1792 16.3475 16.5974C14.9293 18.0157 13.0057 18.8124 11 18.8124C8.99431 18.8124 7.07076 18.0157 5.65252 16.5974C4.23427 15.1792 3.43751 13.2556 3.43751 11.2499Z"
                                      fill="currentColor"></path>
                                  <path
                                      d="M21.1116 4.86164C21.1756 4.79772 21.2263 4.72184 21.2609 4.63832C21.2955 4.5548 21.3133 4.46529 21.3133 4.37489C21.3133 4.28449 21.2955 4.19498 21.2609 4.11146C21.2263 4.02795 21.1756 3.95206 21.1116 3.88814C21.0477 3.82422 20.9718 3.77352 20.8883 3.73892C20.8048 3.70433 20.7153 3.68652 20.6249 3.68652C20.5345 3.68652 20.445 3.70433 20.3615 3.73892C20.2779 3.77352 20.2021 3.82422 20.1381 3.88814L10.9999 13.0278L7.36164 9.38814C7.29772 9.32422 7.22184 9.27352 7.13832 9.23892C7.0548 9.20433 6.96529 9.18652 6.87489 9.18652C6.78449 9.18652 6.69498 9.20433 6.61146 9.23892C6.52795 9.27352 6.45206 9.32422 6.38814 9.38814C6.32422 9.45206 6.27352 9.52795 6.23892 9.61146C6.20433 9.69498 6.18652 9.78449 6.18652 9.87489C6.18652 9.96529 6.20433 10.0548 6.23892 10.1383C6.27352 10.2218 6.32422 10.2977 6.38814 10.3616L10.5131 14.4866C10.577 14.5507 10.6529 14.6015 10.7364 14.6361C10.8199 14.6708 10.9095 14.6886 10.9999 14.6886C11.0903 14.6886 11.1799 14.6708 11.2634 14.6361C11.3469 14.6015 11.4228 14.5507 11.4866 14.4866L21.1116 4.86164Z"
                                      fill="currentColor"></path>
                              </svg>
                          </span>
                          <span className="text-capitalize text-body">majority have suffered alteration in injected randomized words</span>
                      </li>
                  </ul>
                </div>
                <div className="border-top mt-5 pt-5">
                  <Row>
                    <Col sm="5" className="align-self-center">
                      <div className="d-flex align-items-center gap-3">
                          <div className="flex-shrink-0">
                              <Image src={labUser} alt="user" className="img-fluid" />
                          </div>
                          <div>
                              <h6 className="mb-1">Mr. Mark Williams</h6>
                              <p className="m-0">CEO & Founder</p>
                          </div>
                      </div>
                    </Col>
                    <Col sm="2" className="text-center d-sm-block d-none">
                      <div className="vr h-100"></div>
                    </Col>
                    <Col sm="5" className="align-self-center mt-sm-0 mt-4">
                      <Image src={labSignature} alt="signature"  className="img-fluid" />
                    </Col>
                  </Row>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
