import React from "react";

import {CoursePageFaqItem} from "../../";

const CoursePageFaq: React.FC = () => {
    const items = [
        {
            title: "What happens after the subscription is activated?",
            description:
                "You will get full access to the entire platform and will be able to add any course to your training.",
        },
        {
            title: "Will there be additional materials in the course?",
            description:
                "Yes, under each lesson you will find additional materials on the topic of the lesson. Links to products used in the course, instructions, additional recommendations.",
        },
        {
            title: "Will I be supervised during the course?",
            description:
                "No, you take the course on your own using pre-recorded lessons.",
        },
        {
            title: "Will I still have access to the course after completion?",
            description:
                "Yes, you will have access to the course once you have completed it",
        },
        {
            title: "Where can I find a list of courses I've added to my curriculum?",
            description:
                "My training tab can be found by clicking on the menu in the mobile version or on the avatar in the desktop version.",
        },
    ];

    return (
        <section className="course-page-faq">
            <h2 className="course-page__title course-page-faq__title">
                Frequently asked Questions
            </h2>

            <div className="course-page-faq-items-wrapper">
                {items.map((item, index) => (
                    <CoursePageFaqItem
                        {...item}
                        key={`course-page-faq-item-${index}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default CoursePageFaq;
