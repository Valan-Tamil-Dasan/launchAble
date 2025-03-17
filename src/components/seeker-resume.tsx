"use client";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button";

export function SeekerResume() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setError(null);
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
      console.log("Selected file:", selectedFile.name);
    } else {
      setFile(null);
      setError("Only PDF files are allowed.");
      setPreviewUrl(null);
    }
  };

  const handleUpload = () => {
    if (file) {
      console.log("Uploading file:", file.name);
    }
  };

  return (
    <Card className="w-150">
      <CardContent className="p-6 space-y-4">
        <label
          htmlFor="file-upload"
          className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-1 p-6 items-center cursor-pointer"
        >
          <FileIcon className="w-12 h-12" />
          <span className="text-sm font-medium text-gray-500">
            Drag and drop a PDF file or click to browse
          </span>
          <span className="text-xs text-gray-500">Only PDF files are allowed</span>
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange}
        />

      <div className="flex gap-7 items-center justify-center">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {file && 
          <Alert>
            <AlertTitle>File Selected</AlertTitle>
            <AlertDescription className="font-bold">
            {file.name}
            </AlertDescription>
          </Alert>
}
      </div>
      </CardContent>
      <CardFooter className="flex gap-7 items-center justify-center">
        <Button size="lg" disabled={!file} onClick={handleUpload}>
          Upload
        </Button>

        {previewUrl && (
          <Button size="lg" className="bg-primary text-white" onClick={() => window.open(previewUrl, "_blank")}>
            Preview
          </Button>
        )}

      </CardFooter>
    </Card>
  );
}

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}
