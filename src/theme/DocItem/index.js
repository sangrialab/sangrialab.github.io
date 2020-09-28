import React, { useEffect } from 'react';

function DocItem(props) {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://utteranc.es/client.js";
        script.setAttribute('repo', "sangrialab/sangrialab.github.io");
        script.setAttribute('issue-term', "pathname");
        script.setAttribute('label', "comment");
        script.setAttribute('theme', "github-light");
        script.crossOrigin = "anonymous";
        script.async = true;

        document.getElementById("comment-system").appendChild(script);
    }, []);

    return (
        <>
            <div className="padding-vert--lg">
                <div className="container">
                    <div className="row">
                        <div className={classnames('col', styles.docItemCol)}>
                            <div className={styles.docItemContainer}>
                                ...
                    <div className="margin-vert--lg">
                                    <DocPaginator metadata={metadata} />
                                </div>
                                <div id="comment-system"></div>
                            </div>
                        </div>
                ...
              </div>
                </div>
            </div>
        </>
    );
}