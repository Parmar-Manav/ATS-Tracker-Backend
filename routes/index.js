import express from "express"
import applicantRoutes from "./applicantRoutes.js"
import applicationRoutes from "./applicationRoutes.js"
import clientRoutes from "./clientRoutes.js"
import clientExecutiveRoutes from "./clientExecutiveRoutes.js"
import companyTeamRoutes from "./companyTeamRoutes.js"
import teamMemberRoutes from "./teamMemberRoutes.js"
import operationRoutes from "./operationRoutes.js"
import interviewRoutes from "./interviewRoutes.js"
import scoreRoutes from "./scoreRoutes.js"
import documentRoutes from "./documentRoutes.js"
import resumeSectionRoutes from "./resumeSectionRoutes.js"
import jobRoutes from "./jobRoutes.js"
import skillRoutes from "./skillRoutes.js"
import workflowRoutes from "./workflowRoutes.js"
import workflowMasterRoutes from "./workflowMasterRoutes.js"
import communicationRoutes from "./communicationRoutes.js"
import feedbackRoutes from "./feedbackRoutes.js"
import referralRoutes from "./referralRoutes.js"
import jobSkillRoutes from "./jobSkillRoutes.js"
import applicantSkillRoutes from "./applicantSkillRoutes.js"
import analyticsRoutes from "./analyticsRoutes.js"
import integrationRoutes from "./integrationRoutes.js"
import onboardingRoutes from "./onboardingRoutes.js"
import onboardingTaskRoutes from "./onboardingTaskRoutes.js"
import onboardingTemplateRoutes from "./onboardingTemplateRoutes.js"
import calendarRoutes from "./calendarRoutes.js"
import notificationRoutes from "./notificationRoutes.js"
import emailTemplateRoutes from "./emailTemplateRoutes.js"
import reportRoutes from "./reportRoutes.js"
import userActivityRoutes from "./userActivityRoutes.js"
import settingRoutes from "./settingRoutes.js"
import tagRoutes from "./tagRoutes.js"
import applicantTagRoutes from "./applicantTagRoutes.js"
import teamMemberPermissionRoutes from "./teamMemberPermissionRoutes.js"
import operationLogRoutes from "./operationLogRoutes.js"
import applicationStageHistoryRoutes from "./applicationStageHistoryRoutes.js"
import interviewNoteRoutes from "./interviewNoteRoutes.js"
import scoreDetailRoutes from "./scoreDetailRoutes.js"
import documentContentRoutes from "./documentContentRoutes.js"
import jobPreferenceRoutes from "./jobPreferenceRoutes.js"
import jobExternalPostingRoutes from "./jobExternalPostingRoutes.js"
import workflowAutomationRoutes from "./workflowAutomationRoutes.js"
import feedbackCriterionRoutes from "./feedbackCriteriaRoutes.js"
import onboardingProgressRoutes from "./onboardingProgressRoutes.js"
import onboardingTemplateStructureRoutes from "./onboardingTemplateStructureRoutes.js"
import systemLogRoutes from "./systemLogRoutes.js"

const router = express.Router()

router.use("/applicants", applicantRoutes)
router.use("/applications", applicationRoutes)
router.use("/clients", clientRoutes)
router.use("/client-executives", clientExecutiveRoutes)
router.use("/company-teams", companyTeamRoutes)
router.use("/team-members", teamMemberRoutes)
router.use("/operations", operationRoutes)
router.use("/interviews", interviewRoutes)
router.use("/scores", scoreRoutes)
router.use("/documents", documentRoutes)
router.use("/resume-sections", resumeSectionRoutes)
router.use("/jobs", jobRoutes)
router.use("/skills", skillRoutes)
router.use("/workflows", workflowRoutes)
router.use("/workflow-masters", workflowMasterRoutes)
router.use("/communications", communicationRoutes)
router.use("/feedback", feedbackRoutes)
router.use("/referrals", referralRoutes)
router.use("/job-skills", jobSkillRoutes)
router.use("/applicant-skills", applicantSkillRoutes)
router.use("/analytics", analyticsRoutes)
router.use("/integrations", integrationRoutes)
router.use("/onboarding", onboardingRoutes)
router.use("/onboarding-tasks", onboardingTaskRoutes)
router.use("/onboarding-templates", onboardingTemplateRoutes)
router.use("/calendar", calendarRoutes)
router.use("/notifications", notificationRoutes)
router.use("/email-templates", emailTemplateRoutes)
router.use("/reports", reportRoutes)
router.use("/user-activities", userActivityRoutes)
router.use("/settings", settingRoutes)
router.use("/tags", tagRoutes)
router.use("/applicant-tags", applicantTagRoutes)
router.use("/team-member-permissions", teamMemberPermissionRoutes)
router.use("/operation-logs", operationLogRoutes)
router.use("/application-stage-history", applicationStageHistoryRoutes)
router.use("/interview-notes", interviewNoteRoutes)
router.use("/score-details", scoreDetailRoutes)
router.use("/document-contents", documentContentRoutes)
router.use("/job-preferences", jobPreferenceRoutes)
router.use("/job-external-postings", jobExternalPostingRoutes)
router.use("/workflow-automations", workflowAutomationRoutes)
router.use("/feedback-criteria", feedbackCriterionRoutes)
router.use("/onboarding-progress", onboardingProgressRoutes)
router.use("/onboarding-template-structures", onboardingTemplateStructureRoutes)
router.use("/system-logs", systemLogRoutes)

export default router

