import { motion } from 'motion/react';
import { Scan, Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function ReportScannerScreen() {
  const [hasScanned, setHasScanned] = useState(false);

  const aiAnalysis = {
    summary: 'Your blood test results show normal ranges for most parameters.',
    findings: [
      { label: 'Hemoglobin', value: '14.2 g/dL', status: 'normal', range: '13.5-17.5 g/dL' },
      { label: 'White Blood Cells', value: '7,200 /µL', status: 'normal', range: '4,000-11,000 /µL' },
      { label: 'Blood Sugar (Fasting)', value: '118 mg/dL', status: 'elevated', range: '70-100 mg/dL' },
      { label: 'Cholesterol', value: '195 mg/dL', status: 'normal', range: '<200 mg/dL' },
    ],
    recommendations: [
      'Continue current diabetes medication',
      'Monitor blood sugar levels regularly',
      'Consider dietary adjustments to lower fasting glucose',
      'Schedule follow-up in 3 months'
    ]
  };

  return (
    <motion.div
      className="space-y-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        <h1 className="mb-2 bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] bg-clip-text text-transparent"
          style={{ fontSize: '2.5rem', fontWeight: 700 }}>
          AI Report Scanner
        </h1>
        <p className="text-[#94a3b8]" style={{ fontSize: '1.125rem' }}>
          Upload your medical reports for instant AI analysis
        </p>
      </div>

      {!hasScanned ? (
        /* Upload Section */
        <motion.div
          className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-12 rounded-2xl border-2 border-dashed border-white/20 hover:border-[#14B8A6]/50 transition-all duration-300 text-center cursor-pointer"
          whileHover={{ scale: 1.02 }}
          onClick={() => setHasScanned(true)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#14B8A6]/20 to-[#38BDF8]/20 flex items-center justify-center"
            whileHover={{ rotate: 5 }}
          >
            <Upload className="w-12 h-12 text-[#14B8A6]" />
          </motion.div>
          <h3 className="text-white mb-2" style={{ fontWeight: 600, fontSize: '1.5rem' }}>
            Upload Lab Report
          </h3>
          <p className="text-[#94a3b8] mb-6">
            Drag and drop your PDF, image, or document here
          </p>
          <Button className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] hover:from-[#14B8A6]/90 hover:to-[#38BDF8]/90 text-white rounded-xl">
            <FileText className="w-5 h-5 mr-2" />
            Browse Files
          </Button>
          <p className="text-[#94a3b8] mt-4" style={{ fontSize: '0.75rem' }}>
            Supported formats: PDF, JPG, PNG (Max 10MB)
          </p>
        </motion.div>
      ) : (
        /* Analysis Results */
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Summary */}
          <motion.div
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-[#14B8A6]/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/20 flex items-center justify-center flex-shrink-0">
                <Scan className="w-6 h-6 text-[#14B8A6]" />
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-2" style={{ fontWeight: 600, fontSize: '1.25rem' }}>
                  AI Analysis Complete
                </h3>
                <p className="text-[#94a3b8]">
                  {aiAnalysis.summary}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Findings */}
          <motion.div
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white mb-4" style={{ fontWeight: 600, fontSize: '1.25rem' }}>
              Key Findings
            </h3>
            <div className="space-y-4">
              {aiAnalysis.findings.map((finding, index) => {
                const isNormal = finding.status === 'normal';
                return (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-xl border ${
                      isNormal ? 'border-[#14B8A6]/30 bg-[#14B8A6]/5' : 'border-[#F97316]/30 bg-[#F97316]/5'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {isNormal ? (
                          <CheckCircle className="w-5 h-5 text-[#14B8A6]" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-[#F97316]" />
                        )}
                        <span className="text-white" style={{ fontWeight: 600 }}>
                          {finding.label}
                        </span>
                      </div>
                      <span 
                        className={`px-3 py-1 rounded-full ${
                          isNormal ? 'bg-[#14B8A6]/20 text-[#14B8A6]' : 'bg-[#F97316]/20 text-[#F97316]'
                        }`}
                        style={{ fontSize: '0.75rem', fontWeight: 600 }}
                      >
                        {isNormal ? 'Normal' : 'Elevated'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                      <span>Value: <span className="text-white">{finding.value}</span></span>
                      <span>Normal: {finding.range}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* AI Recommendations */}
          <motion.div
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-white mb-4" style={{ fontWeight: 600, fontSize: '1.25rem' }}>
              AI Recommendations
            </h3>
            <div className="space-y-3">
              {aiAnalysis.recommendations.map((rec, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#38BDF8]/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                  <p className="text-[#E5E7EB]" style={{ fontSize: '0.875rem' }}>
                    {rec}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              onClick={() => setHasScanned(false)}
              variant="outline"
              className="flex-1 border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#38BDF8]/10 rounded-xl py-6"
            >
              <Upload className="w-5 h-5 mr-2" />
              Scan Another Report
            </Button>
            <Button
              className="flex-1 bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] hover:from-[#14B8A6]/90 hover:to-[#38BDF8]/90 text-white rounded-xl py-6"
            >
              Save to Records
            </Button>
          </motion.div>
        </motion.div>
      )}

      {/* Info Box */}
      <motion.div
        className="bg-[#38BDF8]/10 border border-[#38BDF8]/30 p-4 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-[#38BDF8]" style={{ fontSize: '0.875rem' }}>
          <strong>Note:</strong> AI analysis is for informational purposes only. Please consult with your healthcare provider for medical advice.
        </p>
      </motion.div>
    </motion.div>
  );
}
