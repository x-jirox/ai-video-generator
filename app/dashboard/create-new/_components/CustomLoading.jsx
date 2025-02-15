import React from 'react';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription
} from "../../../../components/ui/alert-dialog";

function CustomLoading({ loading }) {
    return (
        <AlertDialog open={loading}>
            <AlertDialogContent className="flex flex-col items-center justify-center p-6">
                {/* Título de la alerta */}
                <AlertDialogTitle className="text-xl font-semibold mb-4">
                    Generating Video
                </AlertDialogTitle>

                {/* Descripción de la alerta */}
                <AlertDialogDescription className="text-center mb-4">
                    Do not refresh the page. Your video is being generated.
                </AlertDialogDescription>

                <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" height="100">
                        <path 
                            fill="none" 
                            stroke="black" 
                            stroke-width="25" 
                            stroke-linecap="round" 
                            stroke-dasharray="300 385" 
                            stroke-dashoffset="0"
                            d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z">
                            <animate 
                                attributeName="stroke-dashoffset" 
                                calcMode="spline" 
                                dur="2.5" 
                                values="685;-685" 
                                keySplines="0 0 1 1"
                                repeatCount="indefinite">
                            </animate>
                        </path>
                    </svg>

                    <h2 className="mt-4">Please wait...</h2>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default CustomLoading;
