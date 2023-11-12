import { PropsWithChildren, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export interface PageProps {
    file: string;
    description?: string;
}

export default function ShowPDF({ file }: PropsWithChildren<PageProps>) {
    const [numPages, setNumPages] = useState<number>()
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [loading, setLoading] = useState(true)
    const [pageWidth, setPageWidth] = useState(0)

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages)
    }

    function onPageLoadSuccess() {
        setPageWidth(window.innerWidth)
        setLoading(false)
    }

    return (
        <div>
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                renderMode="canvas"
            >
                <Page
                    key={pageNumber}
                    pageNumber={pageNumber}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    onLoadSuccess={onPageLoadSuccess}
                    onRenderError={() => setLoading(false)}
                    width={Math.max(pageWidth * 0.5, 390)}
                />
            </Document>
            <p>
                {/* Page {pageNumber} of {numPages} */}
            </p>
        </div>
    )
}