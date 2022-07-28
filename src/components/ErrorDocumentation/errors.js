export const lightHouseError = [
  {
    errorName: "First Contentful Paint",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "First Contentful Paint (FCP) is a performance metric that measures how quickly visitors can view actual content (i.e., text, images, video, etc.) on your page.",
          "FCP, which is tied to your page's load speed, is one of the metrics we were already tracking in our Legacy Reports. Read more about it here.",
          "Your page's FCP is the total time taken from the beginning of your page load to the point any content is rendered on the screen.",
          "A low FCP time contributes to a positive user experience, as your visitors perceive the page to be loading fast if content is delivered sooner.",
        ],
        subSections: [{ title: "scan" }],
      },
      {
        title: "What does First Contentful Paint measure?",
        paragraphs: [
          "According to Google:First Contentful Paint measures how long it takes the browser to render the first piece of DOM content after a user navigates to your page. Images, non-white <canvas> elements, and SVGs on your page are considered DOM content; anything inside an iframe isn't included.",
        ],
        subSections: [
          {
            title: "img",
            paragraphs: [
              "https://gtmetrix.com/static/images/documentation/first-contentful-paint-example.png",
              "first-contentful-paint-example",
            ],
          },
          {
            title: "",
            paragraphs: [
              "FCP is an important, user-centric metric for measuring perceived performance because it marks the point where visitors can first see any consumable content on the screen.",
            ],
          },
          {
            title:
              "A fast FCP reassures the user that something is happening during your page load; a slow FCP implies that it's not doing anything, and thus is slow.",
            paragraphs: [
              "By contrast, the First Paint Timing measures the point at which anything is rendered on the screen (e.g., a background color, a border, etc.) - which is far less useful.",
            ],
          },
        ],
      },
      {
        title: "First Contentful Paint's effect on your Performance Score",
        paragraphs: [
          "This metric accounts for 10% of the total Performance Score.",
          "Optimizing your page to improve FCP usually provides sizeable gains, both, in actual page load times and user perception of your site's performance.",
        ],
      },
      {
        title: "Thresholds for First Contentful Paint",
        paragraphs: [
          "FCP thresholds are, as follows:",
          "Good - nothing to do here = FCP time of 934 milliseconds or less.",
          "OK, but consider improvement = FCP time between 934 and 1205 milliseconds.",
          "Longer than recommended = FCP time between 1205 and 1600 milliseconds.",
          "Much longer than recommended = FCP time higher than 1600 milliseconds.",
        ],
      },
      {
        title: "How to improve First Contentful Paint?",
        paragraphs: [
          "Note that the particular audits mentioned below likely contribute the most to your FCP; however, your page's FCP may also be affected by other optimizations that aren't mentioned here. Improve your FCP by incorporating good development practices into your workflow, such as:",
        ],
        subSections: [
          {
            title: "1) Reducing server response time",
            paragraphs: [
              "Reducing server response time helps deliver a fast FCP time on your page. Some of the things you can do here include:",
              "a) Reducing initial server response time",
              "b) Using a Content Delivery Network (CDN)",
              "c) Serving static assets with an efficient cache policy",
              "d) Avoiding multiple page redirects",
              "e) Establishing early connections to important third-party origins",
            ],
          },
          {
            title: "2) Eliminating render-blocking resources",
            paragraphs: [
              "Eliminating render-blocking behaviour on your page ensures resources load as fast as possible",
            ],
          },
          {
            title: "3) Minimizing request counts and payload sizes",
            paragraphs: [
              "Try and keep your request counts and payload sizes as small as possible, so that resources can load fast and the browser can start rendering content on your page sooner.",
            ],
          },
        ],
      },
    ],
  },
  {
    errorName: "Cumulative Layout Shift",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Cumulative Layout Shift (CLS) is a performance metric introduced in 2020 by Lighthouse to measure the perceived visual stability of a page load.",
          "Simply put, CLS measures the unexpected shifting of web elements while the page is being rendered. This measurement is then quantified as an aggregate score of all the individual layout shifts on your page",
          "CLS is also one of the metrics that make up Google's Web Vitals.",
        ],
        subSections: [{ title: "scan" }],
      },
      {
        title: "What does Cumulative Layout Shift measure?        ",
        paragraphs: [
          "According to Google,CLS is an important, user-centric metric for measuring visual stability because it helps quantify how often users experience unexpected layout shifts- a low CLS helps ensure that the page is delightful.",
          "Basically, whenever a page loads, certain page elements unexpectedly shift, affecting the way users interact with the webpage.",
        ],
        subSections: [
          {
            title: "vid",
            youtube: false,
            paragraphs: [
              "https://gtmetrix.com/static/images/documentation/bad-cls.mp4",
            ],
          },

          {
            title: "",
            paragraphs: [
              "These elements could be buttons, contact forms, images, videos, fonts, or other types of content.",
              "          A website with a low CLS has a stable page display, which does not shift elements around and ensures a steady, predictable loading of all website content.              ",
            ],
          },
          {
            title: "vid",
            youtube: false,
            paragraphs: [
              "https://gtmetrix.com/static/images/documentation/good-cls.mp4",
            ],
          },
          {
            title:
              "Reducing CLS is crucial as pages that move around can result in a negative user experience (particularly on mobile devices).",
            paragraphs: [],
          },
          {
            title: "vid",
            youtube: false,
            paragraphs: [
              "https://gtmetrix.com/static/images/documentation/google-bad-cls-tap.mp4",
            ],
          },
          {
            title: "",
            paragraphs: [
              "For example, we've all experienced a situation where we've waited for a page to load, found the button we intended to interact with; yet, just as we've clicked/tapped on it, the screen has shifted down and we've clicked/tapped on a different link entirely, often an ad.",
            ],
          },
          {
            title: "Expected vs Unexpected Layout Shift            ",
            paragraphs: [
              "It is important to note the difference between expected and unexpected layout shifts.An expected layout shift happens in response to a user input.For example, clicking on the search icon to expand an input field.An unexpected layout shift, on the other hand, is usually triggered by third-party content, dimensionless images, or other dynamic content.For example, an ad suddenly appearing and pushing an image or content down the page.GTmetrix differentiates between expected and unexpected layout shifts by excluding layout shifts that occur within 0.5 seconds of user input.",
            ],
          },
        ],
      },
      {
        title: "Cumulative Layout Shift's effect on your Performance Score",
        paragraphs: [
          "CLS accounts for 15% of the total Performance Score, signifying its relatively high importance.",
          "While some of the other Performance Score metrics are directly related to the page loading speeds, CLS focuses on measuring your visitor's page experience.",
          'In particular, CLS is a major contributor to "user delight" - i.e., offering a smooth, lag-free experience to your visitors.',
          "This is further solidified by its inclusion in the Web Vitals set.",
        ],
      },
      {
        title: "Thresholds for Cumulative Layout Shift",
        paragraphs: [
          "It is important to note that CLS is a score - not a timing in milliseconds or seconds, and is calculated using detected shifts in the browser.",
          "Thresholds for CLS scores are, as follows:          ",
          "Good - nothing to do here = CLS of 0.1 or less.          ",
          "OK, but consider improvement = CLS between 0.1 and 0.15.",
          "Longer than recommended = CLS between 0.15 and 0.25.",
          "Much longer than recommended = CLS of 0.25 or higher .",
        ],
      },
      {
        title: "How to improve Cumulative Layout Shift? ",
        paragraphs: [
          "Note that the particular audits mentioned below likely contribute the most to your CLS; however, your page's CLS score may also be affected by other optimizations that aren't mentioned here.",
          "Improve your CLS score by incorporating good practices into your development workflow, such as:",
        ],
        subSections: [
          {
            title: "1) Specifying image dimensions          ",
            paragraphs: [""],
          },
          {
            title:
              "2) Reducing layout shifts caused by ads, embeds, and iframes",
            paragraphs: [""],
          },
          {
            title: "3) Avoiding inserting new content above existing content",
            paragraphs: [""],
          },
          {
            title:
              "4) Preventing the Flash of Invisible Text (FOIT)            ",
            paragraphs: [""],
          },
          {
            title: "5) Avoiding non-composited animations",
            paragraphs: [""],
          },
        ],
      },
    ],
  },
];
export const PageSpeedError = [
  {
    errorName: "Avoid a character set in the meta tag",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Specifying a character set in a meta tag disables the lookahead downloader in IE8. To improve resource download parallelization, move the character set to the HTTP Content-Type response header.",
        ],
        subSections: [{ title: "scan" }],
      },
    ],
  },
  {
    errorName: "Avoid bad requests",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Removing broken links, or requests that result in 404/410 errors, avoids wasteful requests",
        ],
        subSections: [{ title: "scan" }],
      },
      {
        title: "Details from Google",
        paragraphs: [
          "As your website changes over time, it's inevitable that resources will be moved and deleted. If you don't update your frontend code accordingly, the server will issue 404 Not found or 410 Gone responses. These are wasteful, unnecessary requests that lead to a bad user experience and make your site look unprofessional. And if such requests are for resources that can block subsequent browser processing, such as JS or CSS files, they can virtually crash your site. In the short term, you should scan your site for such links with a link checking tool, such as the crawl errors tool in Google's Webmaster Tools, and fix them. Long term, your application should have a way of updating URL references whenever resources change their location.",
        ],
      },
    ],
  },
];
export const YSlowError = [
  {
    errorName: "Add Expires headers",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Expires headers let the browser know whether to serve a cached version of the page.",
          "Reduce server load",
          "Decrease page load time",
          "Cost benefit ratio: high value",
          "Access needed",
        ],
        subSections: [
          {
            title: "scan",
          },
        ],
      },
      {
        title: "What are expires headers        ",
        paragraphs: [
          "Expires headers tell the browser whether they should request a specific file from the server or whether they should grab it from the browser's cache.",
          "The whole idea behind Expires Headers is not only to reduce the load of downloads from the server (constantly downloading the same file when it's unmodified is wasting precious load time) but rather to reduce the number of HTTP requests for the server.",
          "When you visit a website your browser is responsible for communicating with the web server to download all the required files. It then compiles those files to display the web page. As web pages become richer in graphics and content, more and more files are being transferred between your machine and the web server.",
          "In the past you would have an HTML file and maybe a few images to serve for your website, however many modern websites might have 50+ files per page to transfer. The files themselves can be a huge load increase by themselves but for each file you must create a request and even if requests are fractions of a second, they can soon add up.",
        ],
      },
      {
        title: "How does it work?        ",
        paragraphs: [
          "Expires Headers are rather simple in how they work. They tell the browser how long to store a file in the cache so subsequent page views and visits they don't have to download the file again. You are right to assume Expires Headers don't improve page speed for a first time visit as this visitor would have to download all the files for the first time. Using Expires Headers helps decrease load times for returning visitors.",
          "You can set Expires headers on specific files or even file types. Then when the browser comes to the website it can see when was the last time it downloaded the specific file types. If it was recently it will display them from the cache, if you haven't visited the site in a while it will download the newest version from the web server.",
          "The idea is to set late expiry times for items that don't change on your website (logo, colours etc). Set short expiry times for things that change regularly.",
        ],
      },
      {
        title: "Why is it important?        ",
        paragraphs: [
          "Adding Expires Headers is important to reduce HTTP requests which reduces the time it take for the server to communicate with the browser. It also allows your users to reuse the cache files that have been stored in the browser to reduce the amount of files they need to download.",
        ],
      },
    ],
  },
  {
    errorName: "Avoid AlphaImageLoader filter",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "IE's AlphaImageLoader blocks rendering and increases page load times.",
        ],
        subSections: [{ title: "scan" }],
      },
      {
        title: "Details from Yahoo!        ",
        paragraphs: [
          "The IE-proprietary AlphaImageLoader filter attempts to fix a problem with semi-transparent true color PNG files in IE versions less than Version 7. However, this filter blocks rendering and freezes the browser while the image is being downloaded.",
          "Additionally, it increases memory consumption. The problem is further multiplied because it is applied per element, not per image.",
        ],
      },
    ],
  },
];

// error template
// {
//   // the header of the error
//   errorName: "",
//   // here you can add diffrent section to your article there are two types of section (with and without a subsection)
//   sections: [
//     // ex: without subsection
//     {
//       title: "",
//       paragraphs: ["", "", ""],
//     },
//     // ex: with sub section
//     {
//       title: "",
//       paragraphs: ["", "", ""],
//       // there are 4 diffrent types of subsection (normal / video / image / scan)
//       subSections: [
//         {
//           // add a subsection
//           title: "",
//           paragraphs: [
//             "",
//             "",
//           ],
//         },
//         {
//           // add a scan
//           title: "scan",
//         },
//         {
//           // add an image to the sub section
//           title: "img",
//           paragraphs: [
//             "img url",
//             "img alt",
//           ],
//         },
//         {
//           // add a video to the sub section
//           title: "vid",
//           youtube: false,
//           paragraphs: [
//             "video url / youtube url (make sure its an embed)",
//           ],
//         },
//       ]
//     },

//   ]
// }
